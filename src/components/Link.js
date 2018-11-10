import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Column } from 'components';
import { style as css } from 'components/util';
import { Colors } from 'assets';

const color = css('color', 'color', Colors.Gray);
const hover = css('hover', 'color', Colors.Blue);
const cursor = css('cursor', 'cursor', 'pointer');
const fontWeight = css('fontWeight', 'font-weight', 'bold');

const active = props => props.active && hover(props);
export const Link = styled.a`
  ${color};
  ${cursor};
  ${fontWeight};
  &:hover { ${hover} }
  ${active};
`;
