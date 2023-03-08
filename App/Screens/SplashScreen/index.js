import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.foodOrderingText}>Food-Ordering </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  foodOrderingText: {
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
