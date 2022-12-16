import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './MapScreen.style';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import BottomContainer from '../../components/BottomContainer/BottomContainer';
import {getLocation} from '../../serivces/generic/getUserLocation';

const MapScreen = ({route}) => {
  const place = route.params.place;
  const [isPlaceClicked, setIsPlaceClicked] = useState(false);
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  console.log(position);
  useEffect(() => {
    getLocation(setPosition);
  }, []);
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapView
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
          }}>
          <Marker
            onPress={event =>
              setIsPlaceClicked(event.nativeEvent.action === 'marker-press')
            }
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
          />
        </MapView>
        {isPlaceClicked ? (
          <View style={styles.infoContainer}>
            <BottomContainer item={place} />
          </View>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default MapScreen;
