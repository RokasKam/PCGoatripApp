import React from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import styles from './RegisterScreen.style';
import {Image, ImageBackground, View, KeyboardAvoidingView} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../img/Screen.png')}
        resizeMode="cover"
        style={styles.image}>
        <KeyboardAvoidingView behavior="padding" style={styles.mainBlock}>
          <Image
            source={require('../../img/WhiteGoatrip.png')}
            style={styles.logo}
          />
          <Input placeHolder="Nickname" isSecureTextEntryNeeded={false} />
          <Input placeHolder="Email" isSecu reTextEntryNeeded={false} />
          <Input placeHolder="Password" isSecureTextEntryNeeded={true} />
          <Input placeHolder="Repeat password" isSecureTextEntryNeeded={true} />
          <Button
            buttonText="Register"
            onClickAction={() => {
              navigation.navigate('Home');
            }}
          />
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default RegisterScreen;
