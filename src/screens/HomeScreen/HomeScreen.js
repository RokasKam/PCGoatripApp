import {ImageBackground, SafeAreaView, View} from 'react-native';
import React from 'react';
import styles from './HomeScreen.style';
import MOCK_DATA from '../../../mockData/MOCK_DATA.json';
import Places from '../../components/Places/Places';
import Filters from '../../components/Filters/Filters';
import SearchInput from '../../components/SearchInput/SearchInput';

const HomeScreen = () => {
  const data = MOCK_DATA;
  return (
    <ImageBackground
      source={require('../../img/BlurryScreen.png')}
      resizeMode="cover"
      style={styles.image}>
      <SafeAreaView style={styles.page}>
        <View style={styles.searchBlock}>
          <SearchInput />
          <Filters />
        </View>
        <Places places={data} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;
