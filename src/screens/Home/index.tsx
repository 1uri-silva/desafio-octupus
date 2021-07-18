import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import { Container, Title, SubTitle, Btn } from './styles';

export default function Home(): JSX.Element {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Title>Desafio Octupus</Title>

      <SubTitle>
        Entre no app e desfrutr de nossos serviços.{'\n'}
        Escolhe um dos nossos planos de Tv, Internet e Telefonia {'\n'}e
        desfrute do bom pra você.
      </SubTitle>

      <Btn>
        <Button title="Entrar" onPress={() => navigate('Search')} />
      </Btn>
    </Container>
  );
}
