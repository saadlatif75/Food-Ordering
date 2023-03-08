import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function Add() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  // const [name, setName] = useState('');
  // const [name, setName] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add Item</Text>
      </View>
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
          // requestCameraPermission();
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
