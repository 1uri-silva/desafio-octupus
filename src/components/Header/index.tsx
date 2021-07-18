/* eslint-disable react/require-default-props */
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { Container, Title, BackBottom } from './styles';

type Props = {
  title?: string;
};

export default function Header({ title }: Props): JSX.Element {
  const { goBack } = useNavigation();
  return (
    <Container>
      <BackBottom onPress={() => goBack()}>
        <AntDesign name="arrowleft" size={30} color="black" />
      </BackBottom>
      <Title>{title}</Title>
    </Container>
  );
}
