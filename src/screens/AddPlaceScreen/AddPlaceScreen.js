import {View, Text, TextInput, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import InputToWriteRange from '../../components/InputToWriteRange/InputToWriteRange';
import DropDownPicker from 'react-native-dropdown-picker';
import {styling} from './AddPlaceScreen.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import placesCategories from '../../constants/placesCategories';
import BlurryBackround from '../../components/BlurryBackround/BlurryBackround';
import Button from '../../components/Button/Button';
import AddPhoto from './AddPhoto';
import {
  cameraPhotoUploader,
  imageLibraryPhotoUploader,
} from '../../serivces/generic/photoUploader';
import AddLocation from './AddLocation';
import {uploadNewPlace} from '../../serivces/business/uploadNewPlace';

const AddPlaceScreen = () => {
  const styles = styling(openCategoryDropDown);
  const [openCategoryDropDown, setOpenCategoryDropdown] = useState(false);
  const [category, setCategory] = useState('All');
  const [pickedPhotoUri, setPickedPhotoUri] = useState('');
  const [visiblePhotoPicker, setVisiblePhotoPicker] = useState(false);
  const [visibleLocationPicker, setVisibleLocationPicker] = useState(false);
  const [place, setPlace] = useState({
    placeName: '',
    photoBase64: '',
    category: 'All',
    peopleAmountFrom: 0,
    peopleAmountTo: 0,
    priceFrom: 0,
    priceTo: 0,
    visitDurationFrom: 0,
    visitDurationTo: 0,
    latitude: 0,
    longtitude: 0,
  });

  return (
    <BlurryBackround>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.page}
        keyboardShouldPersistTaps="always">
        <SafeAreaView style={styles.section}>
          <Text style={styles.title}>Add a new place</Text>
          <View style={styles.nameInput}>
            <TextInput
              style={styles.textInput}
              value={place.placeName}
              onChangeText={text => setPlace({...place, placeName: text})}
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
              open={openCategoryDropDown}
              value={category}
              items={placesCategories}
              setOpen={setOpenCategoryDropdown}
              setValue={setCategory}
              onSelectItem={item => setPlace({...place, category: item.value})}
              listMode={'SCROLLVIEW'}
            />
          </View>
          <InputToWriteRange
            upText="How many people can accept?"
            inputInfoFrom={place.peopleAmountFrom}
            inputInfoTo={place.peopleAmountTo}
            setInputInfoFrom={text =>
              setPlace({...place, peopleAmountFrom: text})
            }
            setInputInfoTo={text => setPlace({...place, peopleAmountTo: text})}
          />
          <InputToWriteRange
            upText="What is the cost for one person?"
            inputInfoFrom={place.priceFrom}
            inputInfoTo={place.priceTo}
            setInputInfoFrom={text => setPlace({...place, priceFrom: text})}
            setInputInfoTo={text => setPlace({...place, priceTo: text})}
          />
          <InputToWriteRange
            upText="How long does the visit could take?"
            inputInfoFrom={place.visitDurationFrom}
            inputInfoTo={place.visitDurationTo}
            setInputInfoFrom={text =>
              setPlace({...place, visitDurationFrom: text})
            }
            setInputInfoTo={text => setPlace({...place, visitDurationTo: text})}
          />
          <View style={styles.button}>
            <Button
              buttonText="Choose a picture"
              onClickAction={() => setVisiblePhotoPicker(true)}
            />
          </View>
          <View style={styles.button}>
            <Button
              buttonText="Choose a location"
              onClickAction={() => setVisibleLocationPicker(true)}
            />
          </View>
          <View style={styles.button}>
            <Button
              buttonText="Add the place"
              onClickAction={() => uploadNewPlace(place)}
            />
          </View>
          <AddPhoto
            isVisible={visiblePhotoPicker}
            onClose={() => setVisiblePhotoPicker(false)}
            onImageLibraryPress={() =>
              imageLibraryPhotoUploader(setPickedPhotoUri, base64 =>
                setPlace({...place, photoBase64: base64}),
              )
            }
            onCameraPress={() =>
              cameraPhotoUploader(setPickedPhotoUri, base64 =>
                setPlace({...place, photoBase64: base64}),
              )
            }
            uri={pickedPhotoUri}
          />
          <AddLocation
            isVisible={visibleLocationPicker}
            onClose={() => setVisibleLocationPicker(false)}
            place={place}
            setPlace={setPlace}
          />
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </BlurryBackround>
  );
};

export default AddPlaceScreen;
