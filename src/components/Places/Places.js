import {View, FlatList, Image} from 'react-native';
import React from 'react';
import BottomContainer from '../BottomContainer/BottomContainer';
import styles from './Places.style';
const END_REACHED_TRESHOLD = 0.5;

const Places = ({places, currentPageChanger}) => {
  return (
    <FlatList
      style={styles.list}
      data={places}
      removeClippedSubviews={false}
      onEndReached={currentPageChanger}
      onEndReachedThreshold={END_REACHED_TRESHOLD}
      renderItem={({item}) => (
        <View>
          <Image
            source={{
              uri: `${item.photoUrl}`,
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
