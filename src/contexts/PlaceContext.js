import React, {createContext, useContext, useState} from 'react';

const PlacesContext = createContext();
const UpdatePlaceContext = createContext();
const SetPlacesContext = createContext();

export const useUpdatePlace = () => {
  return useContext(UpdatePlaceContext);
};

export const usePlaces = () => {
  return useContext(PlacesContext);
};

export const useSetPlaces = () => {
  return useContext(SetPlacesContext);
};

export const PlaceContext = ({children}) => {
  const [places, setPlaces] = useState([]);

  const updateAPlace = (id, rating) => {
    setPlaces(state =>
      state.map(place =>
        place.id === id ? {...place, rating: rating} : place,
      ),
    );
  };

  return (
    <PlacesContext.Provider value={places}>
      <SetPlacesContext.Provider value={setPlaces}>
        <UpdatePlaceContext.Provider value={updateAPlace}>
          {children}
        </UpdatePlaceContext.Provider>
      </SetPlacesContext.Provider>
    </PlacesContext.Provider>
  );
};
