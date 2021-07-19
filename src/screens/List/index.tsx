import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import LottieMap from '../../assets/mapa.json';
import ListItems from '../../components/ListItems';
import { useLocation } from '../../hook/useLocation';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Container, ViewMap } from './styles';

export default function List(): JSX.Element {
  const { apiData } = useLocation();
  const { navigate } = useNavigation();

  return (
    <>
      <Header />
      <Container>
        {apiData ? (
          <>
            <FlatList
              data={apiData}
              keyExtractor={item => String(item.name)}
              renderItem={({ item }) => <ListItems item={item} />}
            />

            <ViewMap>
              <Button title="Ver no mapa" onPress={() => navigate('Map')} />
            </ViewMap>
          </>
        ) : (
          <LottieView
            source={LottieMap}
            autoPlay
            style={{
              flex: 1,
              backgroundColor: 'transparent',
            }}
          />
        )}
      </Container>
    </>
  );
}
