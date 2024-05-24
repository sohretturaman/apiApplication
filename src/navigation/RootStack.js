import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerStack from './DrawerStack';
import { RouterNames } from '../config';

const Stack = createNativeStackNavigator();

const  RootStack =()=> {
  return (
    <Stack.Navigator
    
    screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouterNames.ROOT} component={DrawerStack} />
    
    </Stack.Navigator>
  );
  }

  export default RootStack