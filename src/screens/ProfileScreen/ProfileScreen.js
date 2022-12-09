import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import React from 'react';
import styles from './ProfileScreen.style';
import Places from '../../components/Places/Places';
import MOCK_DATA_LIKED_PLACES from '../../assets/mockData/MOCK_DATA_LIKED_PLACES.json';
const ProfileScreen = () => {
  const data = MOCK_DATA_LIKED_PLACES;
  return (
    <ImageBackground
      source={require('../../assets/img/blurryScreen.png')}
      resizeMode="cover"
      style={styles.image}>
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
    </ImageBackground>
  );
};

export default ProfileScreen;
