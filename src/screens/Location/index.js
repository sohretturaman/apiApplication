import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import GetLocationComp from '../../component/getLocation';
import styles from './styles';
import {RouterNames} from '../../config';

const Phramacy = props => {
  const {navigation} = props;
  const [adress, setAdress] = useState({city: '', town: ''});

  const handleAddress = currentInfo => {
    console.log('is data info exist', currentInfo); // takes city info properly  from opencagedata
    setAdress(currentInfo);
    if (currentInfo.city !== null && currentInfo.town !== null) {
      navigation.navigate(RouterNames.DRAWER_HOME, {locationInfo: currentInfo});
    }
  };
  useEffect(() => {}, [adress, setAdress]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please press button to get your location</Text>
      <Text style={styles.text}>{adress && adress.city}</Text>
      <GetLocationComp handleAddress={handleAddress} />
    </View>
  );
};

export default Phramacy;
