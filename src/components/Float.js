import React from 'react';
import { Container } from 'components';
import { style } from './util';

export const top = style('top', 'top', '0');
export const right = style('right', 'right', '0');
export const bottom = style('bottom', 'bottom', '0');
export const left = style('left', 'left', '0');
export const alignItems = style('alignItems', 'align-items', 'center');
export const justifyContent = style('justifyContent', 'justify-content', 'center');

export const Float = Container.extend`
  position: absolute;
  ${top};
  ${right};
  ${bottom};
  ${left};
  ${alignItems};
  ${justifyContent};
`;
