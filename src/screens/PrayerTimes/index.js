import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Input from '../../component/input';

import {getPrayerTimes} from '../../service/prayerTimes';
import Button from '../../component/button';
import {colors} from '../../config';
import {PrayerItem} from '../../component';
import styles from './styles';

const initialData = [
  {saat: '03:40', vakit: 'İmsak'},
  {saat: '05:32', vakit: 'Güneş'},
  {saat: '13:06', vakit: 'Öğle'},
  {saat: '17:03', vakit: 'İkindi'},
  {saat: '20:30', vakit: 'Akşam'},
  {saat: '22:14', vakit: 'Yatsı'},
];

const PrayerTimes = props => {
  const {navigation, route} = props;
  const {locationInfo} = route?.params || {}; // Use default value if not available
  const [value, setValue] = useState('');
  const [prayerTimes, setPrayerTimes] = useState(initialData);

  const getPrayerTimesByCity = city => {
    const detailUrl = `?data.city=${city}`;
    getPrayerTimes(detailUrl).then(res => {
      console.log('res in PrayerTimes', res);
      setPrayerTimes(res.result);
    });
  };

  const handleSubmit = () => {
    const textWithoutSpaces = value.replace(/\s+/g, '');
    console.log('textWithoutSpaces', textWithoutSpaces);
    if (textWithoutSpaces && textWithoutSpaces.length > 0) {
      getPrayerTimesByCity(textWithoutSpaces);
    }
  };

  //api get request is working properly!!
  return (
    <View style={styles.container}>
      <Input
        value={value}
        onChangeText={value => setValue(value)}
        onSubmitEditing={handleSubmit}
      />
      {locationInfo?.city && (
        <View>
          <Text style={styles.title}>
           <Text style={styles.innerTitle}>Your Current City is and State: </Text>   {locationInfo?.city},{' '}
            {locationInfo?.state}
          </Text>
          <Button
            title="Get Prayer Times of your current city"
            onPress={() => getPrayerTimesByCity(locationInfo?.city)}
            bgColor={colors.primary}
            textColor={colors.white}
            tintColor={colors.white}
          />
        </View>
      )}

      <Text style={styles.title}>
        {value ? value : 'İstanbul'} İçin Namaz Vakitleri
      </Text>
      <FlatList
        style={styles.list}
        data={prayerTimes}
        renderItem={({item}) => (
          <PrayerItem saat={item.saat} vakit={item.vakit} />
        )}
      />
    </View>
  );
};

export default PrayerTimes;
