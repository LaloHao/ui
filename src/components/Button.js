import React from 'react';
import { Container } from 'components';
import { Colors } from 'assets';
import { style } from 'components/util';

const color = style('color', 'color', 'white');
const backgroundColor = style('backgroundColor', 'background-color', Colors.Green);
export const Button = Container.extend`
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  ${backgroundColor};
  ${color};
  &:hover {
    opacity: 0.8;
  }
  padding: 10px;
  &::before,
  &::after { content: '', flex: 1 0 auto; }
`;
