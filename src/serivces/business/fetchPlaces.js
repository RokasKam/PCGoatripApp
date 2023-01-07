import axios from 'axios';
import {Alert} from 'react-native';
const PLACES_PER_PAGE = 2;

export const fetchPlaces = async (selectedCategory, currentPage, setPlaces) => {
  const configurationObject = {
    method: 'get',
    url: 'https://fd50-78-63-255-251.eu.ngrok.io/api/Place',
    params: {
      FilteringCategory: selectedCategory,
      PageNumber: currentPage,
      PageSize: PLACES_PER_PAGE,
    },
  };
  try {
    const response = await axios(configurationObject);
    setPlaces(state => [...state, ...response.data]);
  } catch (er) {
    Alert.alert('Something went wrong');
  }
};
