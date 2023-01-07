import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './InputToWriteRange.style';

const InputToWriteRange = ({
  upText,
  inputInfoFrom,
  inputInfoTo,
  setInputInfoFrom,
  setInputInfoTo,
}) => {
  return (
    <View style={styles.writeRange}>
      <Text style={styles.topText}>{upText}</Text>
      <View style={styles.inputView}>
        <Text style={styles.textNearInput}>From:</Text>
        <View style={styles.sectionStyle}>
          <TextInput
            defaultValue="0"
            keyboardType="numeric"
            style={styles.textInput}
            value={inputInfoFrom}
            onChangeText={value => setInputInfoFrom(value)}
            placeholder="from"
            placeholderTextColor="dimgrey"
            autoCapitalize="none"
            returnKeyType="search"
          />
        </View>
        <Text style={styles.textNearInput}>To:</Text>
        <View style={styles.sectionStyle}>
          <TextInput
            defaultValue="0"
            keyboardType="numeric"
            style={styles.textInput}
            value={inputInfoTo}
            onChangeText={value => setInputInfoTo(value)}
            placeholder="to"
            placeholderTextColor="dimgrey"
            autoCapitalize="none"
            returnKeyType="search"
          />
        </View>
      </View>
    </View>
  );
};

export default InputToWriteRange;
