import {View} from 'react-native';
import React from 'react';
import styles from './MapScreen.style';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const MapScreen = ({route}) => {
  console.log(route);
  const place = route.params.place;
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: place.latitude,
          longitude: place.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: place.latitude,
            longitude: place.longitude,
          }}
          title={place.name}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
