import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: 'black',
  },
  greyText: {
    color: 'dimgrey',
  },
  accountInfo: {
    paddingHorizontal: 32,
    paddingVertical: 24,
  },
  nameFavourite: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#E1E1E1',
    width: '100%',
    marginBottom: 8,
  },
  bigGreyText: {
    color: 'dimgrey',
    fontSize: 18,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoBlock: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
});
