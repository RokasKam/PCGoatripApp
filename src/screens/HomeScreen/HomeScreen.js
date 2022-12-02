import {SafeAreaView} from 'react-native';
import React from 'react';
import styles from './HomeScreen.style';
import MOCK_DATA from '../../../mockData/MOCK_DATA.json';
import Places from '../../components/Places/Places';

const HomeScreen = () => {
  const data = MOCK_DATA;
  return (
    <SafeAreaView style={styles.page}>
      <Places places={data} />
    </SafeAreaView>
  );
};

export default HomeScreen;
