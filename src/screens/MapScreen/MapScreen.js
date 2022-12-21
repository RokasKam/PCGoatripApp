import {View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './MapScreen.style';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import BottomContainer from '../../components/BottomContainer/BottomContainer';
import {userLocation} from '../../serivces/generic/userLocation';
import MapViewDirections from 'react-native-maps-directions';
import Button from '../../components/Button/Button';
import Geolocation from '@react-native-community/geolocation';

const MapScreen = ({route}) => {
  const place = route.params.place;
  const placeLocation = {
    latitude: place.latitude,
    longitude: place.longitude,
  };
  const [isPlaceClicked, setIsPlaceClicked] = useState(false);
  const [isNavigationNeeded, setIsNavigationNeeded] = useState(false);
  const [watchID, setWatchID] = useState(0);
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
  });
  const mapRef = useRef(null);

  const navigateToPlace = () => {
    setIsNavigationNeeded(true);
    mapRef.current.fitToCoordinates([position, placeLocation], {
      edgePadding: {
        top: 30,
        bottom: 70,
      },
    });
  };

  useEffect(() => {
    userLocation(setPosition, setWatchID);
  }, []);

  useEffect(() => {
    return () => {
      Geolocation.clearWatch(watchID);
      setWatchID(null);
      setPosition(null);
    };
  }, [watchID]);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          onPress={event =>
            setIsPlaceClicked(event.nativeEvent.action === 'marker-press')
          }
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: place.latitude,
            longitude: place.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={isNavigationNeeded}>
          <Marker
            onPress={event =>
              setIsPlaceClicked(event.nativeEvent.action === 'marker-press')
            }
            coordinate={placeLocation}
          />
          {isNavigationNeeded && (
            <MapViewDirections
              origin={position}
              destination={placeLocation}
              apikey={'YOUR_API_KEY'}
              precision="high"
              mode="DRIVING"
              strokeColor="#323C4C"
              strokeWidth={2}
            />
          )}
        </MapView>
        {isPlaceClicked && (
          <View style={styles.infoContainer}>
            <BottomContainer item={place} />
            <View style={styles.buttonContainer}>
              <Button
                buttonText="Navigate to this place"
                onClickAction={navigateToPlace}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default MapScreen;
