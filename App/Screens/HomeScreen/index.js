import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Item from '../../Tabs/Add';
import Transactions from '../../Tabs/Item';
import Add from '../../Tabs/Notification';
import Order from '../../Tabs/Order';
import Notification from '../../Tabs/Transactions';

export default function HomeScreen() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Item />
      ) : selectedTab == 1 ? (
        <Transactions />
      ) : selectedTab == 2 ? (
        <Add />
      ) : selectedTab == 3 ? (
        <Order />
      ) : (
        <Notification />
      )}
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('../../Assests/items.png')}
            style={[
              styles.bottomTabImg,
              {tintColor: selectedTab == 0 ? 'red' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('../../Assests/transaction.png')}
            style={[
              styles.bottomTabImg,
              {tintColor: selectedTab == 1 ? 'red' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            source={require('../../Assests/add.png')}
            style={[
              styles.bottomTabImg,
              {
                width: 35,
                height: 35,
                tintColor: selectedTab == 2 ? 'red' : 'black',
              },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={require('../../Assests/orders.png')}
            style={[
              styles.bottomTabImg,
              {tintColor: selectedTab == 3 ? 'red' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            source={require('../../Assests/notification.png')}
            style={[
              styles.bottomTabImg,
              {tintColor: selectedTab == 4 ? 'red' : 'black'},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
  },
  bottomTab: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabImg: {
    width: 24,
    height: 24,
  },
});
