import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Width} from '../../assets/constants';
import {colors} from '../../config';
const winWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.blue,
    justifyContent: 'space-between',
    paddingHorizontal: winWidth * 0.02,
    alignItems: 'center',
    width: winWidth * 0.9,
    borderRadius: winWidth * 0.03,
    height: winWidth * 0.1,
    alignSelf: 'center',
    marginVertical: Width * 0.02,
    height: winWidth * 0.3,
    elevation: 2,
  },
  icon: {
    width: Width * 0.12,
    height: Width * 0.12,
  },
  innerContainer: {
    width: winWidth * 0.6,
    justifyContent: 'space-evenly',
    
  },
  title: {
    fontSize: Width * 0.05,
    color: colors.white,
    fontWeight: '500',
    paddingVertical: Width * 0.01,
  },
  innerTitle: {
    fontSize: Width * 0.035,
    color: colors.white,
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: Width * 0.02,
    marginTop: Width * 0.03,
  },
  min: {
    fontSize: Width * 0.028,
    color: colors.white,
    fontWeight: '400',
  },
});

export default styles;
