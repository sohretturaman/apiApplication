import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomStack from './BottomStack';
import { RouterNames, colors } from '../config';
import { Pharmacy, Weather } from '../screens';
import { Image } from 'react-native';
import { home, home_outline, medicine, weather } from '../assets/icons';
import styles from './styles';

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
     screenOptions={{
  
      drawerActiveBackgroundColor: colors.primary,
      drawerActiveTintColor: colors.white,
      drawerInactiveTintColor: colors.black,
     }}
    
    >
      <Drawer.Screen name={RouterNames.HOME} component={BottomStack}
        options={{
        drawerIcon: ({ focused }) => (
          <Image  source={home_outline} style={styles.icon2} tintColor={focused ? colors.white : colors.darkGray} />
        ),
        }}
      />
      <Drawer.Screen name={RouterNames.WEATHER} component={Weather}
       options={{
        drawerIcon: ({ focused }) => (
          <Image  source={weather} style={styles.icon2} tintColor={focused ? colors.white : colors.darkGray} />
        ),
        }}
      />
      <Drawer.Screen name={RouterNames.PHARMACY} component={Pharmacy}
       options={{
        drawerIcon: ({ focused }) => (
          <Image  source={medicine} style={styles.icon2} tintColor={focused ? colors.white : colors.darkGray} />
        ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerStack; 