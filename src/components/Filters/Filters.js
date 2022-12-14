import {Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import placesCategories from '../../constants/placesCategories';
import styles from './Filters.style';

const Filters = ({selectedCategory, currentFilterChanger}) => {
  return (
    <FlatList
      style={styles.container}
      horizontal={true}
      data={placesCategories}
      renderItem={({item}) => (
        <TouchableOpacity
          style={[
            styles.item,
            {
              backgroundColor:
                item.label === selectedCategory ? '#7EA48E' : '#ffffff',
              borderWidth: item.label === selectedCategory ? 0 : 0.5,
            },
          ]}
          onPress={() => currentFilterChanger(item.label)}>
          <Text
            style={[
              styles.title,
              {
                color: item.label === selectedCategory ? '#ffffff' : 'dimgrey',
              },
            ]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Filters;
