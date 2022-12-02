import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: '95%',
  },
  sectionImage: {
    height: 243,
    borderWidth: 0,
  },
  bottomContainer: {
    marginTop: -16,
    marginBottom: 16,
  },
});
