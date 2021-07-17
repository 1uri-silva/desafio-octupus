import React, { createContext, ReactNode, useState } from 'react';
import * as Location from 'expo-location';
import api from '../services/api';

type Coords = {
  coords: {
    latitude: number;
    longitude: number;
  };
};

type Api = {
  list: [
    {
      coords: {
        lat: -16.01676;
        lon: -44.77385;
      };
      name: string;
      price: number;
      type: string;
    },
  ];
};

type CoordsContextType = {
  locations: Coords;
  apiData: Api;
  errMessage: string;
  getPermissions: () => Promise<void>;
  getDataApi: ({ coords: { latitude, longitude } }: Coords) => Promise<void>;
};

type CoordsContextProviderProps = {
  children: ReactNode;
};

export const CoordsContext = createContext({} as CoordsContextType);

export function CoordsContextProvider({
  children,
}: CoordsContextProviderProps): JSX.Element {
  const [locations, setLocation] = useState<Coords>({} as Coords);
  const [errMessage, setErrMessage] = useState('');
  const [apiData, setApiData] = useState<Api>({} as Api);

  async function getPermissions() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrMessage('Permission to access location was denied');
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }

  async function getDataApi({ coords: { latitude, longitude } }: Coords) {
    try {
      const { data } = await api.get<Api>(
        `/api/options?lat=${latitude}&lon=${longitude}`,
      );
      setApiData(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <CoordsContext.Provider
      value={{ locations, errMessage, getPermissions, getDataApi, apiData }}
    >
      {children}
    </CoordsContext.Provider>
  );
}
