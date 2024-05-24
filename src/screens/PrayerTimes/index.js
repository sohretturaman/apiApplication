import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Input from '../../component/input';

import {getPrayerTimes} from '../../service/prayerTimes';

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
    <View>
      <Input
        value={value}
        onChangeText={value => setValue(value)}
        onSubmitEditing={handleSubmit}
      />
      {locationInfo?.city && (
        <Text>Your Current City is : {locationInfo?.city}</Text>
      )}
      <Text>{prayerTimes && JSON.stringify(prayerTimes)}</Text>
    </View>
  );
};

export default PrayerTimes;
