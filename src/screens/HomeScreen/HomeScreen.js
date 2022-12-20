import {SafeAreaView, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './HomeScreen.style';
import MOCK_DATA from '../../assets/mockData/MOCK_DATA.json';
import Places from '../../components/Places/Places';
import Filters from '../../components/Filters/Filters';
import SearchInput from '../../components/SearchInput/SearchInput';
import BlurryBackround from '../../components/BlurryBackround/BlurryBackround';
import axios from 'axios';

const HomeScreen = () => {
  const data = MOCK_DATA;
  //const [place, setPlace] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const configurationObject = {
        method: 'get',
        url: 'https://cad5-158-129-7-76.eu.ngrok.io/api/place',
      };
      const response = await axios(configurationObject);
      console.log(response.data);
    };
    fetchUser();
  }, []);
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
