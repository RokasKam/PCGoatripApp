import {View, Text} from 'react-native';
import React from 'react';
import {Rating} from 'react-native-ratings';
import styles from './BottomContainer.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const BottomContainer = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.row}>
        <Text style={styles.textStyle} numberOfLines={1} adjustsFontSizeToFit>
          {item.name}
        </Text>
        <Icon
          style={styles.icon}
          name="map-pin"
          color="#7EA48E"
          size={20}
          onPress={() => navigation.navigate('Map', {place: item})}
        />
      </View>
      <View style={styles.row}>
        <View style={styles.ratingBlock}>
          <Rating
            style={styles.rating}
            type="heart"
            ratingCount={5}
            imageSize={20}
            jumpValue={0.5}
            fractions={2}
            startingValue={item.rating}
          />
          <Text style={[styles.greyText, styles.rating]}>
            {item.rating} / 5.0
          </Text>
        </View>
        <Text style={styles.greyText}>Type of place</Text>
        <Icon name="heart" color="#7EA48E" size={20} style={styles.icon} />
      </View>
      <View style={styles.addionalInfoRow}>
        <Text style={styles.greyText}>1-20 people</Text>
        <Text style={styles.greyText}>1.5-15 Eur/pp</Text>
        <Text style={styles.greyText}>1-2 hours</Text>
      </View>
    </View>
  );
};

export default BottomContainer;
