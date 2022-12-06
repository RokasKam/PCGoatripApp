import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#7EA48E',
    height: 56,
    borderRadius: 8,
    width: '35%',
  },
  textInput: {
    flex: 1,
    color: 'dimgrey',
    lineHeight: 18,
    marginHorizontal: 16,
  },
  topText: {
    fontSize: 18,
    color: 'black',
    marginTop: 8,
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    width: '90%',
  },
  textNearInput: {
    fontSize: 14,
    color: 'black',
  },
  writeRange: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
