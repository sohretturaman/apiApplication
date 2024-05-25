import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const PrayerItem = (props) => {
    const {vakit,saat}=props
  return (
    <View style={styles.container}>
      <Text style={styles.vakit}>vakit :{vakit}</Text>
      <Text style={styles.saat}>{saat} </Text>
    </View>
  );
};

export default PrayerItem;
