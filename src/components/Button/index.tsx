import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Text } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
};
export default function Button({ title, ...rest }: Props): JSX.Element {
  return (
    <Container {...rest}>
      <Text>{title}</Text>
    </Container>
  );
}
