import {View, FlatList, Image} from 'react-native';
import React from 'react';
import BottomContainer from '../BottomContainer/BottomContainer';
import styles from './Places.style';

const Places = ({places}) => {
  return (
    <FlatList
      style={styles.list}
      data={places}
      renderItem={({item}) => (
        <View>
          <Image
            source={{
              uri: `${item.image}`,
            }}
            style={styles.sectionImage}
          />
          <View style={styles.bottomContainer}>
            <BottomContainer item={item} />
          </View>
        </View>
      )}
    />
  );
};

export default Places;
