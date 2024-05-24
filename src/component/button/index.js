import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import { location } from '../../assets/icons';
const Button = props => {
  const {onPress, title,bgColor,textColor,tintColor} = props;
  return (
    <TouchableOpacity style={[styles.container,{backgroundColor:bgColor}]} onPress={onPress}>
        <Image source={location} style={styles.icon} tintColor={tintColor} />
      <Text style={[styles.text,{color:textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
