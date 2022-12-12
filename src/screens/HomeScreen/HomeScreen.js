import {SafeAreaView, View} from 'react-native';
import React from 'react';
import styles from './HomeScreen.style';
import MOCK_DATA from '../../assets/mockData/MOCK_DATA.json';
import Places from '../../components/Places/Places';
import Filters from '../../components/Filters/Filters';
import SearchInput from '../../components/SearchInput/SearchInput';
import BlurryBackround from '../../components/BlurryBackround/BlurryBackround';

const HomeScreen = () => {
  const data = MOCK_DATA;
  return (
    <BlurryBackround>
      <SafeAreaView style={styles.page}>
        <View style={styles.searchBlock}>
          <SearchInput />
          <Filters />
        </View>
        <Places places={data} />
      </SafeAreaView>
    </BlurryBackround>
  );
};

export default HomeScreen;
