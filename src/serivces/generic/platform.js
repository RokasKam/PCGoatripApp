import {Platform} from 'react-native';

export const platformIos = () => {
  return Platform.OS === 'ios';
};

export const platformAndroid = () => {
  return Platform.OS === 'android';
};
