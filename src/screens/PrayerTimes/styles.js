import {StyleSheet, Text, View} from 'react-native';
import {Width} from '../../assets/constants';
import {colors} from '../../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: Width * 0.04,
    color: colors.darkGray,
    fontWeight: '500',
    margin: Width * 0.05,
    textAlign: 'center',
  },
  innerTitle:{
    fontSize: Width * 0.035,
  },
  list: {
    alignSelf: 'center',
  },
});

export default styles;
