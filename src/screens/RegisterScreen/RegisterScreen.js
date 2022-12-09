import React, {useState} from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import styles from './RegisterScreen.style';
import {Image, ImageBackground, View, KeyboardAvoidingView} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
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
            placeHolder="Nickname"
            isSecureTextEntryNeeded={false}
            text={nickname}
            handleTextChange={setNickname}
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
          <Input
            placeHolder="Repeat password"
            isSecureTextEntryNeeded={true}
            text={repeatedPassword}
            handleTextChange={setRepeatedPassword}
          />
          <Button
            buttonText="Register"
            onClickAction={() => {
              navigation.navigate('HomeNavigator');
            }}
          />
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default RegisterScreen;
