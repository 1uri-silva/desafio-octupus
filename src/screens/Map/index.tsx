import React from 'react';
import MapView, { Marker } from 'react-native-maps';

import { useLocation } from '../../hook/useLocation';
import { Container } from './styles';

export default function Map(): JSX.Element {
  const { locations, apiData } = useLocation();
  return (
    <MapView style={{ flex: 1 }} initialRegion={locations}>
      {apiData.map(data => (
        <Marker
          key={data.name}
          coordinate={{
            latitude: data.coords.lat,
            longitude: data.coords.lon,
          }}
        />
      ))}
    </MapView>
  );
}
