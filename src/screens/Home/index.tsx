import React from 'react';
import { Text, View } from 'react-native';

import Button from '../../components/Button';
import styles from './styles';

export default function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desafio Octupus</Text>

      <Text style={styles.messaging}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        dolores magnam vitae, libero minima minus eaque earum corporis sed eius
        excepturi deserunt quod accusamus rem vero porro. Unde, voluptatem modi.
      </Text>

      <View style={styles.btn}>
        <Button title="Entrar" />
      </View>
    </View>
  );
}
