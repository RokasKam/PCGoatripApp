import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './ProfileScreen.style';
import Places from '../../components/Places/Places';
import MOCK_DATA_LIKED_PLACES from '../../../mockData/MOCK_DATA_LIKED_PLACES.json';
const ProfileScreen = () => {
  const data = MOCK_DATA_LIKED_PLACES;
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.infoBlock}>
        <View style={styles.accountInfo}>
          <Text style={styles.textStyle}>Username</Text>
          <Text style={styles.greyText}>example@examle.com</Text>
        </View>
        <View style={styles.nameFavourite}>
          <Text style={styles.bigGreyText}> Liked places</Text>
        </View>
      </View>
      <Places places={data} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
