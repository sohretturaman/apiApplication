import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const PharmacyItem = props => {
  const {data} = props;
  console.log('data in pharmacy item', data);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.title}>Tel: {data.phone}</Text>
      <Text style={styles.innerTitle}>
        Adress: {data.dist}/ {data.address}
      </Text>
    </View>
  );
};

export default PharmacyItem;
