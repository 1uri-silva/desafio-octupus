import React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';

import { useLocation } from '../../hook/useLocation';
import { Icon, CalloutText, CalloutView } from './styles';

export default function Map(): JSX.Element {
  const { locations, apiData } = useLocation();
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={locations}
      provider="google"
      zoomTapEnabled={false}
      rotateEnabled={false}
      showsTraffic={false}
    >
      {apiData.map(data => (
        <Marker
          key={data.name}
          coordinate={{
            latitude: data.coords.lat,
            longitude: data.coords.lon,
          }}
        >
          <Icon name="marker" type={data.type} size={30} />

          <Callout>
            <CalloutView>
              <CalloutText>Nome: {data.name}</CalloutText>
              <CalloutText>Tipo: {data.type}</CalloutText>
              <CalloutText>Preço {data.price}</CalloutText>
            </CalloutView>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
}
