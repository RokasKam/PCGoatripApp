import {TextInput, View} from 'react-native';
import React from 'react';
import styles from './Input.style';

const Input = ({placeHolder, isSecureTextEntryNeeded}) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.textInput}
        placeholder={placeHolder}
        placeholderTextColor="white"
        autoCapitalize="none"
        selectionColor="white"
        secureTextEntry={isSecureTextEntryNeeded}
      />
    </View>
  );
};
export default Input;
