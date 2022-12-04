import {Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import PlaceCategory from '../../../constants/PlaceCategories';
import styles from './Filters.style';

const Filters = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const onClick = category => {
    setSelectedCategory(category);
  };
  return (
    <FlatList
      style={styles.container}
      horizontal={true}
      data={PlaceCategory}
      renderItem={({item}) => (
        <TouchableOpacity
          style={[
            styles.item,
            {
              backgroundColor:
                item === selectedCategory ? '#7EA48E' : '#ffffff',
              borderWidth: item === selectedCategory ? 0 : 0.5,
            },
          ]}
          onPress={() => onClick(item)}>
          <Text
            style={[
              styles.title,
              {
                color: item === selectedCategory ? '#ffffff' : 'dimgrey',
              },
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Filters;
