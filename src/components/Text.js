import React from 'react';
import styled from 'styled-components';
import { style, flex, color, fontSize, display } from 'components/util';
import { Colors } from 'assets';

const visibility = style('visibility', 'visibility', 'inherit');
const width = style('width', 'width');
const whiteSpace = style('whiteSpace', 'white-space');
const overflow = style('overflow', 'overflow');
const textOverflow = style('textOverflow', 'text-overflow');
export const Span = styled.span`
  ${flex};
  ${fontSize};
  ${color};
  ${visibility};
  ${width};
  ${display};
  ${whiteSpace};
  ${overflow};
  ${textOverflow};
  min-width: 0;
`;

const labelColor = style('color', 'color', Colors.Black);
export const Label = Span.extend`
  font-weight: bold;
  ${labelColor};
`;

export const H = Label.extend`
  color: #1565C0;
`;

export const H1 = H.extend`
  font-size: 30px;
`;

export const H2 = H.extend`
  font-size: 20px;
`;

export const H3 = H.extend`
  font-size: 14px;
`;
