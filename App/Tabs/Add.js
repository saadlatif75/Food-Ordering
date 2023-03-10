import {
  Image,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function Add() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageData, setimageData] = useState(null);
  // const [name, setName] = useState('');
  // const [name, setName] = useState('');
  const lauchGallery = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});
    if (result.didCancel) {
    } else {
      console.log(result);
      setimageData(result);
    }
  };
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        lauchGallery();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add Item</Text>
      </View>
      {console.log('image data==', imageData)}
      {imageData !== null ? (
        <Image
          source={{uri: imageData.assests[0].uri}}
          style={{width: '90%', height: '30%'}}
        />
      ) : null}
      <TextInput
        placeholder="Enter Item Name"
        style={styles.inputStyle}
        // value={name}
        // onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Enter Item Price"
        style={styles.inputStyle}
        // value={price}
        // onChangeText={text => setPrice(text)}
      />
      <TextInput
        placeholder="Enter Item Discount Price"
        style={styles.inputStyle}
        // value={discountPrice}
        // onChangeText={text => setDiscountPrice(text)}
      />
      <TextInput
        placeholder="Enter Item Description"
        style={styles.inputStyle}
        // value={description}
        // onChangeText={text => setDescription(text)}
      />
      <TextInput
        placeholder="Enter Item Image URL"
        style={styles.inputStyle}
        // value={imageUrl}
        // onChangeText={text => setImageUrl(text)}
      />
      <Text style={{alignSelf: 'center', marginTop: 20}}>OR</Text>
      <TouchableOpacity
        style={styles.pickBtn}
        onPress={() => {
          requestCameraPermission();
        }}>
        <Text>Pick Image From Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.uploadBtn}
        onPress={() => {
          // uplaodImage();
        }}>
        <Text style={{color: '#fff'}}>Upload Item</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    elevation: 2,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
  },
  inputStyle: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
    alignSelf: 'center',
  },
  pickBtn: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  uploadBtn: {
    backgroundColor: '#5246f2',
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
});
