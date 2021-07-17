import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from './src/routes';
import { CoordsContextProvider } from './src/contexts/location';

export default function App(): JSX.Element {
  return (
    <CoordsContextProvider>
      <Routes />
      <StatusBar style="auto" />
    </CoordsContextProvider>
  );
}
