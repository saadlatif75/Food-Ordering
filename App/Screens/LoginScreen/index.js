import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.adminLoginText}>Admin Login </Text>
      <TextInput
        style={styles.basicTextInput}
        placeholder="Enter Email Address"
      />
      <TextInput
        style={styles.basicTextInput}
        placeholder="Password Here"
        secureTextEntry={true}>
        {/* <Image
          style={{height: 20, width: 20}}
          source={require('../../Assests/eye.png')}
        /> */}
      </TextInput>
      <TouchableOpacity style={styles.loginButton}>
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
