import React, {useState} from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import TransparentButton from '../../components/TransparentButton/TransparentButton';
import styles from './LoginScreen.style';
import {Image, ImageBackground, View, KeyboardAvoidingView} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email, password);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/img/screen.png')}
        resizeMode="cover"
        style={styles.image}>
        <KeyboardAvoidingView behavior="padding" style={styles.mainBlock}>
          <Image
            source={require('../../assets/img/whiteGoatrip.png')}
            style={styles.logo}
          />
          <Input
            placeHolder="Email"
            isSecureTextEntryNeeded={false}
            text={email}
            handleTextChange={setEmail}
          />
          <Input
            placeHolder="Password"
            isSecureTextEntryNeeded={true}
            text={password}
            handleTextChange={setPassword}
          />
          <Button
            buttonText="Login"
            onClickAction={() => {
              navigation.navigate('HomeNavigator');
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
