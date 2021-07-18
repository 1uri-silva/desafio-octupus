import styled from 'styled-components/native';
import { fonts } from '../../styles/fonts';
import { theme } from '../../styles/styles';

export const Content = styled.View`
  margin-left: 10px;
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-size: 25px;
  margin-top: 100px;
  margin-bottom: 70px;
  color: ${theme.gray};
  font-family: ${fonts.Poppins_Regular};
`;

export const SearchView = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
`;
export const Input = styled.TextInput`
  width: 85%;
  padding: 10px;
  font-size: 17px;
  border-radius: 5px;
  background-color: gray;
  font-family: ${fonts.Poppins_Regular};
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  margin-left: 3px;
  border-radius: 5px;
  align-items: center;
  background-color: blue;
  justify-content: center;
`;
export const Touchable = styled.TouchableOpacity`
  width: 95%;
  height: 50px;
  margin-top: 70px;
  justify-content: center;
`;

export const BtnTxt = styled.Text`
  font-size: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Separator = styled.Text`
  border-width: 0.7px;
  border-color: black;
  height: 1px;
`;
