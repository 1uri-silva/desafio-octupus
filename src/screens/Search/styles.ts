import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  margin-left: 10px;
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-size: 25px;
  margin-top: 100px;
  margin-bottom: 70px;
`;

export const SearchView = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
`;
export const Input = styled.TextInput`
  width: 85%;
  border-radius: 5px;
  padding: 10px;
  background-color: gray;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
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
