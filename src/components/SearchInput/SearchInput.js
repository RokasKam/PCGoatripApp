import {View, Pressable, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './SearchInput.style';
const SearchInput = () => {
  const [searchAplied, setSearchAplied] = useState(false);
  const [searchText, setSearchText] = useState('');
  const handleSearch = (text, isSearchAplied) => {
    setSearchAplied(isSearchAplied);
    setSearchText(text);
  };
  console.log(searchText);
  return (
    <View style={styles.sectionStyle}>
      {searchAplied ? (
        <Pressable
          onPress={() => {
            handleSearch('', false);
          }}>
          <Image
            source={require('../../img/arrow.png')}
            style={styles.backArrowImageStyle}
          />
        </Pressable>
      ) : (
        <></>
      )}
      <TextInput
        style={styles.textInput}
        value={searchText}
        onChangeText={value => handleSearch(value, false)}
        placeholder={'Search Goatrip places...'}
        placeholderTextColor="dimgrey"
        autoCapitalize="none"
        returnKeyType="search"
        onSubmitEditing={event => handleSearch(event.nativeEvent.text, true)}
      />
      <Pressable
        onPress={() => {
          handleSearch(searchText, true);
        }}>
        <Image
          source={require('../../img/SearchIcon.png')}
          style={styles.imageStyle}
        />
      </Pressable>
    </View>
  );
};

export default SearchInput;
