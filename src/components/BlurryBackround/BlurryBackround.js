import {ImageBackground} from 'react-native';
import React from 'react';
import styles from './BlurryBackround.styles';

const BlurryBackround = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/img/blurryScreen.png')}
      resizeMode="cover"
      style={styles.image}>
      {children}
    </ImageBackground>
  );
};

export default BlurryBackround;
