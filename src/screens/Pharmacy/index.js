import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../../component/input';
import {pharmacy} from '../../service';
import Button from '../../component/button';
import {colors} from '../../config';
import {getDutyPharmacy} from '../../service/pharmacy';
import { PharmacyItem } from '../../component';
import styles from './styles';

const initialData = [
  {
    address: 'MUTLU MAH. 723. SOK. NO:19/A',
    dist: 'MAMAK',
    loc: '39.9053077460566,32.9110982734325',
    name: 'İLKNUR',
    phone: '3123904358',
  },

  {
    address: 'FATİH MAH.YAVUZ BULVARI GAMZE SOK.NO:1/A PURSAKLAR',
    dist: 'PURSAKLAR',
    loc: '40.043006,32.906814',
    name: 'NUR SEDA',
    phone: '3123280086',
  },
  {
    address: 'SIMON BOLIVAR CAD. 4. BASIN SITESI NO:24/A',
    dist: 'ÇANKAYA',
    loc: '39.881029,32.858722',
    name: 'ECECAN',
    phone: '3124417477',
  },
  {
    address: 'MUSTAFA KEMAL MAH.VURAL BAYLAN BULVARI NO:101/B',
    dist: 'SİNCAN',
    loc: '40.00642657,32.50781546',
    name: 'SEVİNÇ',
    phone: '3125434543',
  },
  {
    address: 'KARTALTEPE MAH. ALPARSLAN TÜRKEŞ BULVARI NO:38/D',
    dist: 'BALA',
    loc: '39.549994,33.124581',
    name: 'BÜŞRA YALÇIN',
    phone: '3128190908',
  },
  {
    address: 'BEYAZIT MAH. NURETTİN CANKURTARAN CAD.NO:34/B',
    dist: 'AKYURT',
    loc: '40.130609,33.081508',
    name: 'ESRA ERBEYİ',
    phone: '3128440695',
  },
  {
    address: 'BAHÇELİEVLER MAH. TAŞKENT CADDESİ NO:58/B',
    dist: 'ÇANKAYA',
    loc: '39.9267243688466,32.8294979279535',
    name: 'HAYAT AĞACI',
    phone: '3122136788',
  },
  {
    address: 'BAĞLICA MAH. ETİMESGUT BULVARI NO:116/A',
    dist: 'ETİMESGUT',
    loc: '39.8948844298787,32.6471676762952',
    name: 'BAĞLICA SAĞLIK',
    phone: '3129995443',
  },
  {
    address: 'YENİCE MAH.ŞEHİT MEHMET ERDEM CADDESİ NO:12/C',
    dist: 'KIZILCAHAMAM',
    loc: '40.471137,32.647122',
    name: 'KADİR',
    phone: '3127366464',
  },
  {
    address: 'HUZUR MAH. 1109. SOK. NO:3/B',
    dist: 'ÇANKAYA',
    loc: '39.868802,32.823866',
    name: 'ÇEVİK',
    phone: '3124761640',
  },
  {
    address: 'GÖKÇEK MAH. 267. SOK. C BLOK NO:15/37 SİNCAN',
    dist: 'SİNCAN',
    loc: '39.986864,32.559914',
    name: 'GONCA CAN',
    phone: '3122671735',
  },
  {
    address: 'KEMALPAŞA MAH. CUMHURİYET CAD. NO.30/3-A ELMADAĞ/ANKARA',
    dist: 'ELMADAĞ',
    loc: '39.920679,33.22828512',
    name: 'SÖNMEZ',
    phone: '3128633223',
  },

  {
    address: 'SATIKADIN MAH. ANKARA BULVARI NO:68/B',
    dist: 'KAZAN',
    loc: '40.2064570367894,32.6813110716038',
    name: 'CEREN',
    phone: '3128140088',
  },
  {
    address: 'CEVİZLİDERE MAH. CEVİZLİDERE CAD. NO:60/A',
    dist: 'ÇANKAYA',
    loc: '39.882455,32.817422',
    name: 'CADDE CEVİZLİDERE',
    phone: '3124726611',
  },
  {
    address: 'YENİ MAH. KOOPERATİF EVLERİ SOK. NO:13/A',
    dist: 'HAYMANA',
    loc: '39.435673,32.495955',
    name: 'SAĞLIK',
    phone: '3126582267',
  },
  {
    address: 'CUMHURİYET MAH. HÜRRİYET CAD. NO:18/18 TEMELLİ',
    dist: 'SİNCAN',
    loc: '39.72694,32.354672',
    name: 'ALTINTAŞ',
    phone: '5362810884',
  },
];
const Phramacy = props => {
  const {navigation, route} = props;

  const [dutyPharmacies, setDutyPharmacies] = useState(initialData);
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

  const getPharmaciesByCity = city => {
    const detailUrl = `?il=${city}`;

    getDutyPharmacy(detailUrl).then(res => {
      //API request is working properly!
      console.log('res in getPharmaciesByCity', res);
      setDutyPharmacies(res.result);
    });
  };
  return (
    <View>
      <Input
        placeholder="search for a city"
        value={value}
        onChangeText={value => setValue(value)}
        onSubmitEditing={() => getPharmaciesByCity(value)}
      />

      {location?.city && (
        <View>
          <Text style={styles.title}>
            <Text style={styles.innerTitle}>Your Current City and state is :</Text> {location?.city}, {location?.state}
          </Text>
          <Button
            title="Get duty pharmacies of your current city"
            onPress={() => getPharmaciesByCity(location?.city)}
            bgColor={colors.primary}
            textColor={colors.white}
            tintColor={colors.white}
          />
        </View>
      )}
      <Text style={styles.title}>{value ? value : 'İstanbul'} için Nöbetçi Eczaneler </Text>
        <FlatList 
         data={dutyPharmacies}
         renderItem={({item})=><PharmacyItem  data={item} />}
         keyExtractor={(item, index) => index.toString()}
        />
      
    </View>
  );
};

export default Phramacy;
