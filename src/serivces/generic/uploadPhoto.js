import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const onImageLibraryPress = setPickerResponse => {
  const options = {
    selectionLimit: 1,
    mediaType: 'photo',
    includeBase64: false,
  };
  launchImageLibrary(options, response => setPickerResponse(response));
};

export const onCameraPress = setPickerResponse => {
  const options = {
    saveToPhotos: false,
    mediaType: 'photo',
    includeBase64: false,
  };
  launchCamera(options, response => setPickerResponse(response));
};
