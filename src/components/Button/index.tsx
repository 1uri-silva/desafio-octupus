import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Text } from './styles';

type Props = RectButtonProps & {
  title: string;
};
export default function Button({ title, ...rest }: Props): JSX.Element {
  return (
    <Container {...rest}>
      <Text>{title}</Text>
    </Container>
  );
}
