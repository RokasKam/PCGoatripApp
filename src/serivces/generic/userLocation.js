import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid} from 'react-native';
import {platformAndroid, platformIos} from './platform';

export const userLocation = async (setPosition, setWatchID) => {
  let granted = null;
  if (platformAndroid()) {
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
  if (granted === PermissionsAndroid.RESULTS.GRANTED || platformIos()) {
    const watchID = Geolocation.watchPosition(
      info =>
        setPosition({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        }),
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000},
    );
    setWatchID(watchID);
  } else {
    console.log('Permission denied');
  }
};
