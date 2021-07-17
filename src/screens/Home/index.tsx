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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        dolores magnam vitae, libero minima minus eaque earum corporis sed eius
        excepturi deserunt quod accusamus rem vero porro. Unde, voluptatem modi.
      </SubTitle>

      <Btn>
        <Button title="Entrar" onPress={() => navigate('Search')} />
      </Btn>
    </Container>
  );
}
