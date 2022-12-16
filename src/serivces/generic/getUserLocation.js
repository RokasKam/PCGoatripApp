import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid, Platform} from 'react-native';

export const getLocation = async setPosition => {
  let granted = null;
  if (Platform.OS === 'android') {
    try {
      granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Goatrip Location Permission',
          message: 'We need your location in order to show route to the place',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
    } catch (err) {
      console.warn(err);
    }
  }
  if (granted === PermissionsAndroid.RESULTS.GRANTED || Platform.OS === 'ios') {
    Geolocation.getCurrentPosition(
      info =>
        setPosition({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          latitudeDelta: 0.0421,
          longitudeDelta: 0.0421,
        }),
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000},
    );
  } else {
    console.log('Permission denied');
  }
};
