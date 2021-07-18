import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ListItems from '../../components/ListItems';
import { useLocation } from '../../hook/useLocation';
import { Container, ViewMap } from './styles';
import Button from '../../components/Button';

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

      <ViewMap>
        <Button title="Ver no mapa" onPress={() => navigate('Map')} />
      </ViewMap>
    </Container>
  );
}
