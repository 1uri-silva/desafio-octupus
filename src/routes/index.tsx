import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Search from '../screens/Search';
import List from '../screens/List';
import Map from '../screens/Map';

const { Navigator, Screen } = createStackNavigator();

export default function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="Search" component={Search} />
        <Screen name="List" component={List} />
        <Screen name="Map" component={Map} />
      </Navigator>
    </NavigationContainer>
  );
}
