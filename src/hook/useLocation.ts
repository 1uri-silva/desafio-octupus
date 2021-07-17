/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import { CoordsContext } from '../contexts/location';

export function useLocation() {
  const value = useContext(CoordsContext);

  return value;
}
