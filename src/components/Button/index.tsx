import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import styles from './styles';

type Props = TouchableOpacityProps & {
  title: string;
};
export default function Button({ title, ...rest }: Props): JSX.Element {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
