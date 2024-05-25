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
    width: winWidth * 0.8,
    borderRadius: winWidth * 0.03,
    height: winWidth * 0.1,
    alignSelf: 'center',
    marginVertical: Width * 0.02,
    height: winWidth * 0.15,
    elevation: 2,
  },
  vakit: {
    fontSize: winWidth * 0.04,
    color: colors.white,
    fontWeight: '500',
  },
  saat: {
    fontSize: winWidth * 0.05,
    color: colors.white,
    fontWeight: '500',
  },
});

export default styles;
