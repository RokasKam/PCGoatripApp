import axios from 'axios';
import {Alert} from 'react-native';

export const updateRating = async (id, rating, updateAPlace) => {
  const updateRequest = {
    userRating: rating,
  };
  const configurationObject = {
    method: 'put',
    url: `https://fd50-78-63-255-251.eu.ngrok.io/api/Place/${id}`,
    data: updateRequest,
  };
  try {
    const response = await axios(configurationObject);
    updateAPlace(response.data.id, response.data.rating);
  } catch (error) {
    Alert.alert('Something went wrong');
  }
};
