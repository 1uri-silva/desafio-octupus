import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  height: 50px;
  width: 80%;
  margin-top: 100px;
  align-items: center;
  background-color: blue;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #fff;
  text-align: center;
`;
