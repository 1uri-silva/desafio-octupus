import React from 'react';

import { Api } from '../../contexts/location';
import { Container, Name } from './styles';

type Props = {
  item: Api;
};

export default function ListItems({ item }: Props): JSX.Element {
  const price = item.price.toFixed(2);
  return (
    <Container>
      <Name>Nome do produto: {item.name}</Name>
      <Name>Tipo: {item.type}</Name>
      <Name>R$ {price}</Name>
    </Container>
  );
}
