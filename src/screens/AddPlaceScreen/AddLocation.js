import {View} from 'react-native';
import React, {useState} from 'react';
import styles from './AddLocation.style';
import Modal from 'react-native-modal';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const AddLocation = ({isVisible, onClose, place, setPlace}) => {
  const [isMarkerNeeded, setIsMarkerNeeded] = useState(false);

  const handlePlacePress = details => {
    setIsMarkerNeeded(true);
    setPlace({
      ...place,
      latitude: details.geometry.location.lat,
      longtitude: details.geometry.location.lng,
    });
  };
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles.modal}>
      <View style={styles.modalView}>
        <View style={styles.mapBlock}>
          <View style={styles.searchBlock}>
            <GooglePlacesAutocomplete
              placeholder="Search for a place adress"
              fetchDetails={true}
              styles={{
                textInput: styles.textInput,
                separator: styles.seperator,
                powered: styles.powered,
                description: styles.description,
              }}
              onPress={(data, details = null) => handlePlacePress(details)}
              query={{
                key: 'YOUR_API_KEY',
                language: 'en',
              }}
            />
          </View>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: place.latitude,
              longitude: place.longtitude,
              latitudeDelta: isMarkerNeeded ? 0.0421 : 100,
              longitudeDelta: isMarkerNeeded ? 0.0922 : 100,
            }}>
            {isMarkerNeeded && (
              <Marker
                coordinate={{
                  latitude: place.latitude,
                  longitude: place.longtitude,
                }}
              />
            )}
          </MapView>
        </View>
      </View>
    </Modal>
  );
};

export default AddLocation;
