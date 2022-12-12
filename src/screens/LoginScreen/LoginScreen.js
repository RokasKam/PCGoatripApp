import React, {useState} from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import TransparentButton from '../../components/TransparentButton/TransparentButton';
import {useNavigation} from '@react-navigation/core';
import BackroundWithLogo from '../../components/BackroundWithLogo/BackroundWithLogo';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <BackroundWithLogo>
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
    </BackroundWithLogo>
  );
};

export default LoginScreen;
