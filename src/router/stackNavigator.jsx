import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../screens/cart';
import { CART, TAB } from '../utils/routes';
import TabNavigator from './tabNavigator';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
      // * Nested navigasyon yapmak için bottom tabsların olduğu navigatoru,
      // stack navigator içine screen olarak ekledik. 
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name={TAB} component={TabNavigator} />
        <Stack.Screen name={CART} component={Cart} />
      </Stack.Navigator>
  );
}

export default StackNavigator;