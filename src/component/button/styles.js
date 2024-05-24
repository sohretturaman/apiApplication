import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Width } from '../../assets/constants';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: Width*0.02,
    margin: Width*0.02,
    flexDirection: 'row',
    height:Width*0.1,
    width:Width*0.9,
    alignSelf: 'center',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
    
  },
});

export default styles;
