import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './InputToWriteRange.style';

const InputToWriteRange = ({upText, inputInfo, setInputInfo}) => {
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
            value={inputInfo.from}
            onChangeText={value => setInputInfo({...inputInfo, from: value})}
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
            value={inputInfo.to}
            onChangeText={value => setInputInfo({...inputInfo, to: value})}
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
