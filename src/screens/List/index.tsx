import React from 'react';
import { FlatList } from 'react-native';

import ListItems from '../../components/ListItems';
import { useLocation } from '../../hook/useLocation';
import { Container } from './styles';

export default function List(): JSX.Element {
  const { apiData } = useLocation();

  return (
    <Container>
      <FlatList
        data={apiData}
        keyExtractor={item => String(item.name)}
        renderItem={({ item }) => <ListItems item={item} />}
      />
    </Container>
  );
}
