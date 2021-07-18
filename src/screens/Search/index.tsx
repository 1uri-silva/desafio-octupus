import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useLocation } from '../../hook/useLocation';

import {
  BtnTxt,
  Button,
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
    <>
      <Content>
        <Title>Pesquise um endereço ou forneça o seu automaticamente</Title>

        <SearchView>
          <Input
            placeholder="São Paulo, Sp"
            placeholderTextColor="#000"
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
            <Ionicons name="search-sharp" size={30} color="white" />
          </Button>
        </SearchView>

        <Touchable
          onPress={() => {
            getDataApi(locations);
            navigate('List');
          }}
        >
          <BtnTxt>Usar localização atual</BtnTxt>
        </Touchable>
        <Separator />
      </Content>
    </>
  );
}
