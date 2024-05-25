import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import GetLocation from 'react-native-get-location';
import {GEOCODE_KEY} from '@env';
import Button from '../button';

const GetLocationComp = (props) => {
  // take current location
const {handleAddress} = props;
  
  const [location, setLocation] = useState({longitude: 0, latitude: 0});

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        setLocation({
          longitude: location.longitude,
          latitude: location.latitude,
        });
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  const getCurrentAdress = () => {
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${location.latitude}+${location.longitude}&key=${GEOCODE_KEY}`,
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        const currentInfo = {
            city: data.results[0].components.city,
            state: data.results[0].components.state,
        }

       
        handleAddress(currentInfo);
      });
  };

  return (
    <View>
      <Button
        onPress={getCurrentAdress}
        bgColor="red"
        title="Get Location"
        textColor="white"
        tintColor="white"
      />
    </View>
  );
};

export default GetLocationComp;
