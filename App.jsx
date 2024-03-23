import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/router/tabNavigator';
import RootNavigator from './src/router/rootNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
