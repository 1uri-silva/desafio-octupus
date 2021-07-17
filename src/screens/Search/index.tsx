import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useLocation } from '../../hook/useLocation';

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
  const { navigate } = useNavigation();
  const [address, setAddress] = useState('');

  const { getPermissions, locations, getDataApi, getAddress } = useLocation();

  useEffect(() => {
    getPermissions();
  }, [getPermissions]);

  return (
    <Container>
      <Content>
        <Title>Pesquise um endereço ou forneça o seu automaticamente</Title>

        <SearchView>
          <Input
            placeholder="Busque um endereço"
            value={address}
            onChangeText={value => setAddress(value)}
          />

          <Button
            onPress={() => {
              getAddress(address);
              getDataApi(locations);
              navigate('List');
            }}
          >
            <Text style={{ fontSize: 20 }}>PQ</Text>
          </Button>
        </SearchView>

        <Touchable
          onPress={() => {
            getDataApi(locations);
            navigate('List');
          }}
        >
          <BtnTxt>Usar sua localização atual</BtnTxt>
        </Touchable>

        <Separator />
      </Content>
    </Container>
  );
}
