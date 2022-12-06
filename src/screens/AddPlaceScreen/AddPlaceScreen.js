import {
  View,
  Text,
  ImageBackground,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import InputToWriteRange from '../../components/InputToWriteRange/InputToWriteRange';
import DropDownPicker from 'react-native-dropdown-picker';
import PlaceCategory from '../../../constants/PlaceCategories';
import {styling} from './AddPlaceScreen.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AddPlaceScreen = () => {
  const [name, setName] = useState('');
  const [howManyPeople, setHowManyPeople] = useState({from: 0, to: 0});
  const [whatCost, setWhatCost] = useState({from: 0, to: 0});
  const [howLong, setHowLong] = useState({from: 0, to: 0});
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('All');
  const styles = styling(open);

  return (
    <ImageBackground
      source={require('../../img/BlurryScreen.png')}
      resizeMode="cover"
      style={styles.image}>
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
              arrowIconStyle={styles.iconsStyle}
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
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default AddPlaceScreen;
