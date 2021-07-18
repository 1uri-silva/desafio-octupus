import styled from 'styled-components/native';
import { fonts } from '../../styles/fonts';
import { theme } from '../../styles/styles';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  margin-top: 35px;
  flex-direction: row;
  align-items: center;
`;

export const BackBottom = styled.TouchableOpacity`
  width: 50px;
  padding: 5px;
  height: 100%;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-left: 100px;
  text-align: center;
  color: ${theme.title};
  font-family: ${fonts.Poppins_Regular};
`;
