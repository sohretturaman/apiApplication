import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Width} from '../../assets/constants';
import {colors} from '../../config';
const winWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    width: winWidth * 0.9,
    borderRadius: winWidth * 0.03,
    height: winWidth * 0.3,
    alignSelf: 'center',
    marginVertical: Width * 0.02,
    padding: Width * 0.02,
    elevation: 2,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: Width * 0.04,
    color: colors.white,
    fontWeight: '500',
    margin: Width * 0.01,
   
  },
  innerTitle:{
    fontSize: Width * 0.035,
    color: colors.white,
  },
});

export default styles;
