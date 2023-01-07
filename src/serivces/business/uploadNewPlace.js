import {Alert} from 'react-native';
import axios from 'axios';

export const uploadNewPlace = async place => {
  const configurationObject = {
    method: 'post',
    url: 'https://fd50-78-63-255-251.eu.ngrok.io/api/Place',
    data: place,
  };
  try {
    await axios(configurationObject);
    Alert.alert('The place was added');
  } catch (er) {
    Alert.alert('Something went wrong');
  }
};
