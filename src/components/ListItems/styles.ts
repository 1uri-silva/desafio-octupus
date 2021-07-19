import styled from 'styled-components/native';
import { fonts } from '../../styles/fonts';
import { theme } from '../../styles/styles';

export const Container = styled.View`
  height: 120px;
  margin-top: 20px;
  padding: 20px 10px;
  border-radius: 10px;
  justify-content: center;
  background-color: ${theme.title};
`;

export const Name = styled.Text`
  font-size: 18px;
  color: ${theme.background};
  font-family: ${fonts.Poppins_Medium};
`;
