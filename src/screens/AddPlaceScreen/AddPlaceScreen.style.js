import {StyleSheet} from 'react-native';

export const styling = open =>
  StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: 'center',
      height: '102%',
      width: '100%',
    },
    page: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    section: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%',
    },
    title: {
      marginTop: 8,
      fontSize: 24,
      color: 'black',
    },
    nameInput: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderColor: '#7EA48E',
      height: 56,
      borderRadius: 8,
      marginTop: 8,
    },
    textInput: {
      flex: 1,
      color: 'dimgrey',
      lineHeight: 18,
      marginHorizontal: 16,
    },
    dropDown: {
      backgroundColor: 'white',
      borderColor: '#7EA48E',
    },
    dropDownContainer: {
      height: open ? 200 : undefined,
    },
    dropDownList: {
      backgroundColor: 'white',
      borderColor: '#7EA48E',
    },
    dropDownText: {
      fontSize: 15,
      color: 'dimgrey',
    },
    dropDownTitle: {
      color: 'black',
      marginBottom: 8,
      fontSize: 18,
    },
    iconsStyle: {
      color: '#7EA48E',
    },
    dropDownBlock: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 8,
    },
  });
