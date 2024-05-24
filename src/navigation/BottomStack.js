import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Location, PrayerTimes } from '../screens';
import { RouterNames, colors } from '../config';
import {Image} from 'react-native'
import { home,location } from '../assets/icons';
import styles from './styles';

const Tab = createBottomTabNavigator();

const  BottomStack =()=> {
  return (
    <Tab.Navigator
     screenOptions={{headerShown: false}}
    >
      <Tab.Screen name={RouterNames.DRAWER_HOME} component={PrayerTimes}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image  source={home} style={styles.icon} tintColor={focused ? colors.primary : colors.lightGray} />
          ),
        }}
      />
      <Tab.Screen name={RouterNames.LOCATION} component={Location} 
      
       options={{
        tabBarIcon:({focused})=>(
          <Image  source={location} style={styles.icon} tintColor={ focused ? colors.primary : colors.lightGray} />
        )
       }}
      />
    </Tab.Navigator>
  );
}

export default BottomStack ; 