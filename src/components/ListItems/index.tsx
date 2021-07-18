import React from 'react';

import { Api } from '../../contexts/location';
import { Container, Name } from './styles';

type Props = {
  item: Api;
};

export default function ListItems({ item }: Props): JSX.Element {
  return (
    <Container>
      <Name>{item.name}</Name>
      <Name>{item.type}</Name>
      <Name>{item.price}</Name>
    </Container>
  );
}
