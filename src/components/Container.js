import React from 'react';
import styled from 'styled-components';

import {
  flex,
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
} from 'components/util';

export const Container = styled.div`
  ${flex};
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
