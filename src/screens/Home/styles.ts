import styled from 'styled-components/native';
import { fonts } from '../../styles/fonts';
import { theme } from '../../styles/styles';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 27px;
  margin-top: 100px;
  text-align: center;
  color: ${theme.title};
  font-family: ${fonts.Poppins_Medium};
`;

export const SubTitle = styled.Text`
  font-size: 22px;
  margin-top: 25px;
  margin-left: 10px;
  color: ${theme.sub};
  font-family: ${fonts.Poppins_Light};
`;

export const Btn = styled.View`
  left: 0px;
  right: 0px;
  bottom: 5px;
  height: 150px;
  position: absolute;
  align-items: center;
  justify-content: center;
`;
