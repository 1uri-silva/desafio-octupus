import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import React from 'react';

import {
  useFonts,
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import Routes from './src/routes';
import { CoordsContextProvider } from './src/contexts/location';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <CoordsContextProvider>
      <Routes />
      <StatusBar style="auto" />
    </CoordsContextProvider>
  );
}
