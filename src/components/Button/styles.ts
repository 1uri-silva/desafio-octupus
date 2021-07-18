import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { fonts } from '../../styles/fonts';
import { theme } from '../../styles/styles';

export const Container = styled(RectButton)`
  width: 80%;
  height: 50px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.but};
`;

export const Text = styled.Text`
  font-size: 22px;
  text-align: center;
  color: ${theme.title};
  font-family: ${fonts.Poppins_Medium};
`;
