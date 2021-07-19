import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import Button from '../../components/Button';
import LottieNetworking from '../../assets/networking.json';
import { Container, Title, SubTitle, Btn } from './styles';

export default function Home(): JSX.Element {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Title>Desafio Octupus</Title>

      <SubTitle>
        Entre no app e desfrute de nossos serviços.{'\n'}
        Veja alguns de nossos planos de TV, BROADBAND, LANDLINE e ADDON
        {'\n'} e escolha o que mais combina com você.
      </SubTitle>

      <LottieView
        source={LottieNetworking}
        autoPlay
        style={{
          marginTop: 70,
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}
      />
      <Btn>
        <Button title="Entrar" onPress={() => navigate('Search')} />
      </Btn>
    </Container>
  );
}
