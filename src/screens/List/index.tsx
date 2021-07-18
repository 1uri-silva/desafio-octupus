import React from 'react';
import { Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ListItems from '../../components/ListItems';
import { useLocation } from '../../hook/useLocation';
import { Container, Map } from './styles';

export default function List(): JSX.Element {
  const { apiData } = useLocation();
  const { navigate } = useNavigation();

  return (
    <Container>
      <FlatList
        data={apiData}
        keyExtractor={item => String(item.name)}
        renderItem={({ item }) => <ListItems item={item} />}
      />
      <Map onPress={() => navigate('Map')}>
        <Text>Ver no mapa</Text>
      </Map>
    </Container>
  );
}
