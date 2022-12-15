import {View, Text, TextInput, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import InputToWriteRange from '../../components/InputToWriteRange/InputToWriteRange';
import DropDownPicker from 'react-native-dropdown-picker';
import {styling} from './AddPlaceScreen.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PlaceCategory from '../../constants/placesCategories';
import BlurryBackround from '../../components/BlurryBackround/BlurryBackround';
import Button from '../../components/Button/Button';
import AddPhoto from './AddPhoto';
import {
  onCameraPress,
  onImageLibraryPress,
} from '../../serivces/generic/uploadPhoto';

const AddPlaceScreen = () => {
  const [name, setName] = useState('');
  const [howManyPeople, setHowManyPeople] = useState({from: 0, to: 0});
  const [whatCost, setWhatCost] = useState({from: 0, to: 0});
  const [howLong, setHowLong] = useState({from: 0, to: 0});
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('All');
  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);

  const styles = styling(open);
  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  return (
    <BlurryBackround>
      <KeyboardAwareScrollView contentContainerStyle={styles.page}>
        <SafeAreaView style={styles.section}>
          <Text style={styles.title}>Add a new place</Text>
          <View style={styles.nameInput}>
            <TextInput
              style={styles.textInput}
              value={name}
              onChangeText={value => setName(value)}
              placeholder="Place's name"
              placeholderTextColor="dimgrey"
              autoCapitalize="none"
              returnKeyType="search"
            />
          </View>
          <View style={styles.dropDownBlock}>
            <Text style={styles.dropDownTitle}>Choose a category</Text>
            <DropDownPicker
              maxHeight={160}
              style={styles.dropDown}
              textStyle={styles.dropDownText}
              containerStyle={styles.dropDownContainer}
              dropDownContainerStyle={styles.dropDownList}
              open={open}
              value={category}
              items={PlaceCategory}
              setOpen={setOpen}
              setValue={setCategory}
              listMode={'SCROLLVIEW'}
            />
          </View>
          <InputToWriteRange
            upText="How many people can accept?"
            inputInfo={howManyPeople}
            setInputInfo={setHowManyPeople}
          />
          <InputToWriteRange
            upText="What is the cost for one person?"
            inputInfo={whatCost}
            setInputInfo={setWhatCost}
          />
          <InputToWriteRange
            upText="How long does the visit could take?"
            inputInfo={howLong}
            setInputInfo={setHowLong}
          />
          <View style={styles.button}>
            <Button
              buttonText="Choose a picture"
              onClickAction={() => setVisible(true)}
            />
          </View>
          <AddPhoto
            isVisible={visible}
            onClose={() => setVisible(false)}
            onImageLibraryPress={() => onImageLibraryPress(setPickerResponse)}
            onCameraPress={() => onCameraPress(setPickerResponse)}
            uri={uri}
          />
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </BlurryBackround>
  );
};

export default AddPlaceScreen;
