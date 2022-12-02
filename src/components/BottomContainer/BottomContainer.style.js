import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bottomContainer: {
    backgroundColor: 'white',
    height: 122,
    borderRadius: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    marginHorizontal: 20,
  },
  textStyle: {
    fontSize: 18,
    color: 'black',
  },
  icon: {
    marginLeft: 8,
  },
  ratingBlock: {
    flexDirection: 'row',
    ustifyContent: 'flex-start',
    alignItems: 'center',
  },
  greyText: {
    color: 'dimgrey',
  },
  rating: {
    marginRight: 8,
  },
  addionalInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 12,
    paddingHorizontal: 20,
    paddingVertical: 6,
    backgroundColor: '#E1E1E1',
  },
});
