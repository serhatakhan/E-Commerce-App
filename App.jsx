import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/router/tabNavigator';
import RootNavigator from './src/router/rootNavigator';
import Provider from './src/context/provider';

export default function App() {
  return (
    // Böylelikle uygulamanın tamamı Provider'ın içine children olarak gitti
    <Provider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
