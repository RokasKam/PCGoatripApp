import React from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import TransparentButton from '../../components/TransparentButton/TransparentButton';
import styles from './LoginScreen.style';
import {Image, ImageBackground, View, KeyboardAvoidingView} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const LoginScreen = () => {
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
          <Input placeHolder="Email" isSecureTextEntryNeeded={false} />
          <Input placeHolder="Password" isSecureTextEntryNeeded={true} />
          <Button
            buttonText="Login"
            onClickAction={() => {
              navigation.navigate('Home');
            }}
          />
          <TransparentButton
            buttonText="Don't have an account?"
            onClickAction={() => {
              navigation.navigate('Register');
            }}
          />
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
