import React, {useState} from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/core';
import BackroundWithLogo from '../../components/BackroundWithLogo/BackroundWithLogo';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  return (
    <BackroundWithLogo>
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
    </BackroundWithLogo>
  );
};

export default RegisterScreen;
