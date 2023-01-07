import {useEffect} from 'react';
import {useSetPlaces} from '../contexts/PlaceContext';
import {fetchPlaces} from '../serivces/business/fetchPlaces';

export const useFetchPlaces = (selectedCategory, currentPage) => {
  const setPlaces = useSetPlaces();
  useEffect(() => {
    setPlaces([]);
  }, [selectedCategory, setPlaces]);

  useEffect(() => {
    fetchPlaces(selectedCategory, currentPage, setPlaces);
  }, [setPlaces, currentPage, selectedCategory]);
};
