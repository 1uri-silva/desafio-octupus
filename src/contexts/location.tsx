import React, { createContext, ReactNode, useState } from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import api from '../services/api';

type Coords = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

export type Api = {
  coords: {
    lat: number;
    lon: number;
  };
  name: string;
  price: number;
  type: 'TV' | 'BROADBAND' | 'LANDLINE' | 'ADDON';
};

type CoordsContextType = {
  locations: Coords;
  apiData?: Api[];
  errMessage: string;
  getPermissions: () => Promise<void>;
  getAddress: (address: string) => Promise<void>;
  getDataApi: ({ latitude, longitude }: Coords) => Promise<void>;
};

type CoordsContextProviderProps = {
  children: ReactNode;
};

export const CoordsContext = createContext({} as CoordsContextType);

export function CoordsContextProvider({
  children,
}: CoordsContextProviderProps): JSX.Element {
  const [locations, setLocation] = useState<Coords>({} as Coords);
  const [apiData, setApiData] = useState<Api[]>();
  const [errMessage, setErrMessage] = useState('');

  // get permission device user
  async function getPermissions() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrMessage('Volte e tente novamente');
      Alert.alert(errMessage);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude,
      longitude,
      latitudeDelta: 0.14,
      longitudeDelta: 0.14,
    });
  }

  // get address user
  async function getAddress(address: string) {
    const accepted = await Location.hasServicesEnabledAsync();
    if (accepted) {
      const cityAddress = await Location.geocodeAsync(address);
      cityAddress.map(({ latitude, longitude }) =>
        setLocation({
          latitude,
          longitude,
          latitudeDelta: 0.14,
          longitudeDelta: 0.14,
        }),
      );
    }
    await getPermissions();
  }

  // get api data
  async function getDataApi({ latitude, longitude }: Coords) {
    try {
      const { data } = await api.get(
        `/api/options?lat=${latitude}&lon=${longitude}`,
      );
      const { list } = data;
      setApiData(list);
    } catch {
      Alert.alert('Algo saiu errado, tente novamente');
    }
  }

  return (
    <CoordsContext.Provider
      value={{
        locations,
        errMessage,
        getPermissions,
        getDataApi,
        apiData,
        getAddress,
      }}
    >
      {children}
    </CoordsContext.Provider>
  );
}
