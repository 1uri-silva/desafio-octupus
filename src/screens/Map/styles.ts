/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components/native';
import { Foundation } from '@expo/vector-icons';
import { theme } from '../../styles/styles';
import { fonts } from '../../styles/fonts';

type TypeProps = {
  type: 'TV' | 'BROADBAND' | 'LANDLINE' | 'ADDON';
};

export const Icon = styled(Foundation)<TypeProps>`
  ${({ type }) =>
    type === 'TV' &&
    css`
      color: ${theme.green};
    `};
  ${({ type }) =>
    type === 'BROADBAND' &&
    css`
      color: ${theme.red};
    `};
  ${({ type }) =>
    type === 'LANDLINE' &&
    css`
      color: ${theme.blue};
    `};
  ${({ type }) =>
    type === 'ADDON' &&
    css`
      color: ${theme.gray};
    `};
`;

export const CalloutView = styled.View`
  width: 160px;
  height: 60px;
`;

export const CalloutText = styled.Text`
  font-size: 12px;
  color: ${theme.gray};
  font-family: ${fonts.Poppins_Medium};
`;
