import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalView: {
    height: '75%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
  },
  searchBlock: {
    position: 'absolute',
    zIndex: 1,
    top: 12,
    left: 12,
    right: 12,
  },
  mapBlock: {
    width: '100%',
    height: '100%',
  },
  textInput: {
    borderColor: '#7EA48E',
    borderWidth: 1,
    color: 'dimgrey',
  },
  seperator: {
    backgroundColor: '#7EA48E',
  },
  powered: {
    color: 'dimgrey',
  },
  description: {
    color: 'dimgrey',
  },
});
