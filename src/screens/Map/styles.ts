/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components/native';
import { Foundation } from '@expo/vector-icons';

type TypeProps = {
  type: 'TV' | 'BROADBAND' | 'LANDLINE' | 'ADDON';
};

export const Icon = styled(Foundation)<TypeProps>`
  ${({ type }) =>
    type === 'TV' &&
    css`
      color: green;
    `};
  ${({ type }) =>
    type === 'BROADBAND' &&
    css`
      color: red;
    `};
  ${({ type }) =>
    type === 'LANDLINE' &&
    css`
      color: blue;
    `};
  ${({ type }) =>
    type === 'ADDON' &&
    css`
      color: gray;
    `};
`;
