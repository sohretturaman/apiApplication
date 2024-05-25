import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getWeather} from '../../service/weather';
import Input from '../../component/input';
import {colors} from '../../config';
import Button from '../../component/button';
import { WeatherItem } from '../../component';
import styles from './styles';

const initialData = [
  {
    date: '25.05.2024',
    day: 'Cumartesi',
    degree: '17.47',
    description: 'hafif yağmur',
    humidity: '56',
    icon: 'https://cdnydm.com/permedia/zvWjzjmkp5WUUEWob4d48Q.png?size=512x512',
    max: '20.84',
    min: '9.34',
    night: '13.71',
    status: 'Rain',
  },
  {
    date: '26.05.2024',
    day: 'Pazar',
    degree: '19.29',
    description: 'hafif yağmur',
    humidity: '48',
    icon: 'https://cdnydm.com/permedia/zvWjzjmkp5WUUEWob4d48Q.png?size=512x512',
    max: '21.87',
    min: '10.94',
    night: '14.05',
    status: 'Rain',
  },
  {
    date: '27.05.2024',
    day: 'Pazartesi',
    degree: '17.62',
    description: 'orta şiddetli yağmur',
    humidity: '60',
    icon: 'https://cdnydm.com/permedia/zvWjzjmkp5WUUEWob4d48Q.png?size=512x512',
    max: '19.62',
    min: '11.51',
    night: '15.16',
    status: 'Rain',
  },
  {
    date: '28.05.2024',
    day: 'Salı',
    degree: '19.45',
    description: 'orta şiddetli yağmur',
    humidity: '53',
    icon: 'https://cdnydm.com/permedia/zvWjzjmkp5WUUEWob4d48Q.png?size=512x512',
    max: '20.6',
    min: '12.33',
    night: '15.13',
    status: 'Rain',
  },
  {
    date: '29.05.2024',
    day: 'Çarşamba',
    degree: '21.5',
    description: 'hafif yağmur',
    humidity: '45',
    icon: 'https://cdnydm.com/permedia/zvWjzjmkp5WUUEWob4d48Q.png?size=512x512',
    max: '23.94',
    min: '12.21',
    night: '15.77',
    status: 'Rain',
  },
  {
    date: '30.05.2024',
    day: 'Perşembe',
    degree: '21.09',
    description: 'hafif yağmur',
    humidity: '46',
    icon: 'https://cdnydm.com/permedia/zvWjzjmkp5WUUEWob4d48Q.png?size=512x512',
    max: '23',
    min: '13.26',
    night: '16.92',
    status: 'Rain',
  },
  {
    date: '31.05.2024',
    day: 'Cuma',
    degree: '23.06',
    description: 'açık',
    humidity: '36',
    icon: 'https://cdnydm.com/permedia/LC1i84c3Z2MtLUDNbzWz8A.png?size=512x512',
    max: '24.88',
    min: '12.92',
    night: '18.2',
    status: 'Clear',
  },
];

const Weather = props => {
  const {navigation, route} = props;
  const [weatherData, setWeatherData] = useState(initialData);
  const [location, setLocation] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('locationInfo')
      .then(value => {
        if (value) {
          setLocation(JSON.parse(value));
        }
      })
      .catch(error => {
        console.log('error while catching location info', error);
      });
    return () => {};
  }, []);

  const getWeaterWithCity = city => {
    const detailUrl = `?data.lang=tr&data.city=${city}`;

    getWeather(detailUrl).then(res => { //API request is working properly!
      console.log('res in getPharmaciesByCity', res);
      setWeatherData(res.result);
    });
  };
  return (
    <View>
      <Input
        value={value}
        onChangeText={value => setValue(value)}
        onSubmitEditing={() => getWeaterWithCity(value)}
      />

      {location?.city && (
        <View>
          <Text>Your Current City is : {location?.city}</Text>
          <Button
            title="Get Weather forecast of your current city"
            onPress={() => getPrayerTimesByCity(location?.city)}
            bgColor={colors.primary}
            textColor={colors.white}
            tintColor={colors.white}
          />
        </View>
      )}

      <Text style={styles.title}>{value ? value : 'İstanbul'} İçin Hava Durumları</Text>
      <FlatList 
       data={weatherData}
       renderItem={({item})=><WeatherItem  data={item} />}
       keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Weather;
