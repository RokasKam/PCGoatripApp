import {SafeAreaView, View} from 'react-native';
import React, {useState} from 'react';
import styles from './HomeScreen.style';
import Places from '../../components/Places/Places';
import Filters from '../../components/Filters/Filters';
import SearchInput from '../../components/SearchInput/SearchInput';
import BlurryBackround from '../../components/BlurryBackround/BlurryBackround';
import {usePlaces} from '../../contexts/PlaceContext';
import {useFetchPlaces} from '../../hooks/useFetchPlaces';

const HomeScreen = ({navigation}) => {
  const places = usePlaces();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const currentPageChanger = () => setCurrentPage(state => state + 1);

  const currentFilterChanger = chosenFilter => {
    setSelectedCategory(chosenFilter);
    setCurrentPage(1);
  };

  useFetchPlaces(selectedCategory, currentPage);

  return (
    <BlurryBackround>
      <SafeAreaView style={styles.page}>
        <View style={styles.searchBlock}>
          <SearchInput />
          <Filters
            selectedCategory={selectedCategory}
            currentFilterChanger={currentFilterChanger}
          />
        </View>
        <Places
          places={places}
          currentPageChanger={() => currentPageChanger()}
        />
      </SafeAreaView>
    </BlurryBackround>
  );
};

export default HomeScreen;
