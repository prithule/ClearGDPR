import { shape, number, string, arrayOf } from 'prop-types';

export const processorType = shape({
  id: number,
  name: string,
  description: string,
  logoUrl: string,
  scopes: arrayOf(string)
});

export const userType = shape({
  id: number,
  username: string
});