import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import GetLocationComp from '../../component/getLocation';
import styles from './styles';
import {RouterNames} from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Phramacy = props => {
  const {navigation} = props;
  const [adress, setAdress] = useState({city: '', state: ''});

  const handleAddress = currentInfo => {
    console.log('is data info exist', currentInfo); // takes city info properly  from opencagedata
    setAdress(currentInfo);
    AsyncStorage.setItem('locationInfo', JSON.stringify(currentInfo));
    if (currentInfo.city !== null && currentInfo.state !== null) {
      navigation.navigate(RouterNames.DRAWER_HOME, {locationInfo: currentInfo});
    }
  };
  useEffect(() => {}, [adress, setAdress]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please press button to get your location</Text>
      <Text style={styles.text}>Your Current Location is: {adress && adress.city} {adress.state}</Text>
      <GetLocationComp handleAddress={handleAddress} />
    </View>
  );
};

export default Phramacy;
