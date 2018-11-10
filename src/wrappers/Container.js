import React from 'react';
import styled from 'styled-components';

import {
  flex,
  flexDirection,
  margin,
  padding,
  width,
  height,
  backgroundColor,
  color,
  fontWeight,
  alignSelf,
  alignItems,
  alignContent,
  justifySelf,
  justifyItems,
  justifyContent,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
  opacity,
  visibility,
  display,
  zIndex,
  boxShadow,
  top,
  right,
  bottom,
  left,
  flexBasis,
  cursor,
  maxWidth,
  maxHeight,
  position,
} from './util';

const Container = styled.div`
  ${flex};
  ${flexDirection};
  ${margin};
  ${padding};
  ${width};
  ${height};
  ${backgroundColor}
  ${color};
  ${fontWeight};
  ${alignSelf};
  ${alignItems};
  ${alignContent};
  ${justifySelf};
  ${justifyItems};
  ${justifyContent};
  ${border};
  ${borderTop};
  ${borderRight};
  ${borderBottom};
  ${borderLeft};
  ${borderRadius};
  ${opacity};
  ${visibility};
  ${display};
  ${zIndex};
  ${boxShadow};
  ${top};
  ${right};
  ${bottom};
  ${left};
  ${flexBasis};
  ${cursor};
  ${maxWidth};
  ${maxHeight};
  min-width: 0;
  ${position};
`;

export default Container;
