import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {}, []);
  const adminLoginFirebase = async () => {
    const getUserData = await firestore().collection('admin').get();
    if (
      email == getUserData.docs[0]._data.email &&
      password == getUserData.docs[0]._data.password
    ) {
      navigation.navigate('HomeScreen');
    } else console.log('not exits');
    console.log('user===', getUserData.docs[0].data.email);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.adminLoginText}>Admin Login </Text>
      <TextInput
        style={styles.basicTextInput}
        placeholder="Enter Email Address"
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        style={styles.basicTextInput}
        placeholder="Password Here"
        secureTextEntry={true}
        value={password}
        onChangeText={pass => setPassword(pass)}></TextInput>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          if (email !== '' && password !== '') {
            adminLoginFirebase();
          } else {
            ToastAndroid.show('Plase fill form', ToastAndroid.LONG);
          }
        }}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  adminLoginText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 70,
  },
  basicTextInput: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  loginButton: {
    width: '70%',
    borderRadius: 5,
    marginVertical: 20,
    backgroundColor: 'orange',
  },
  loginButtonText: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    textAlign: 'center',
    fontWeight: '700',
  },
});
