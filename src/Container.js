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

const ContainerWrapper = styled.div`
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

type Props = {
  /** Shorthard property for: `flexGrow`, `flexShrink`, `flexBasis` */
  flex?: number | string,
  /** Container direction */
  flexDirection?: 'column' | 'row',
  flexBasis?: string,
  /** Shorthard property for setting all individuals margins at once:
   * `marginTop`, `marginRight`, `marginBottom`, `marginLeft` */
  margin?: number | string,
  /** Shorthard property for setting all individuals paddings at once:
   * `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft` */
  padding?: number | string,
  /** Shorthard property for setting `minWidth`, `maxWidth` */
  width?: number | string,
  maxWidth?: number | string,
  /** Shorthard property for setting `minHeight`, `maxHeight` */
  height?: number | string,
  maxHeight?: number | string,
  /** Sets background color */
  backgroundColor?: string,
  /** Sets text color */
  color?: string,
  /** Sets font-weight */
  fontWeight?: string,

  alignSelf?: string,
  alignItems?: string,
  alignContent?: string,

  justifySelf?: string,
  justifyItems?: string,
  justifyContent?: string,

  border?: number | string,
  borderTop?: number | string,
  borderRight?: number | string,
  borderBottom?: number | string,
  borderLeft?: number | string,
  borderRadius?: number | string,

  opacity?: string,
  visibility?: string,
  display?: string,

  zIndex?: string,

  boxShadow?: string,

  top?: number | string,
  right?: number | string,
  bottom?: number | string,
  left?: number | string,

  cursor?: string,
  // min-width: 0;
  position?: string,

  /** Function to be called when the button is clicked */
  onClick?: Function,
};

const Container = (props: Props) => <ContainerWrapper {...props} />
// Container.displayName = 'Container';

export default Container;
