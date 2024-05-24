import {View, Text, TextInput, Image} from 'react-native';
import React, { useState } from 'react';


import styles from './styles';
import { search } from '../../assets/icons';
const Input = (props) => {
  const {onSubmitEditing,value, onChangeText} = props;



  return (
    <View style={styles.container}>
       <TextInput placeholder='search for a new' 
        onChangeText={onChangeText}
        value={value}
        onSubmitEditing={onSubmitEditing}
       />

       <Image source={search}  style={styles.icon}/>
    </View>
  );
};

export default Input;