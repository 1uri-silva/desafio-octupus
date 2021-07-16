import React from 'react';
import { Text } from 'react-native';

import {
  BtnTxt,
  Button,
  Container,
  Content,
  Input,
  SearchView,
  Separator,
  Title,
  Touchable,
} from './styles';

export default function Search(): JSX.Element {
  return (
    <Container>
      <Content>
        <Title>Pesquise um endereço ou forneça o seu automaticamente</Title>

        <SearchView>
          <Input placeholder="Busque um endereço" />
          <Button>
            <Text style={{ fontSize: 20 }}>PQ</Text>
          </Button>
        </SearchView>

        <Touchable>
          <BtnTxt>Sua localização atual</BtnTxt>
        </Touchable>

        <Separator />
      </Content>
    </Container>
  );
}
