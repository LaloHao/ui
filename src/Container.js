// @flow
import * as React from 'react';
import { Container as ContainerWrapper } from './wrappers';
import { $alignItems } from './enum';

// const $alignItems = {
//   'normal': 'normal',
//   'stretch': 'stretch',
//   'center': 'center',
//   'start': 'start',
//   'end': 'end',
//   'flex-start': 'flex-start',
//   'flex-end': 'flex-end',
//   'self-start': 'self-start',
//   'self-end': 'self-end',
//   'baseline': 'baseline',
//   'first baseline': 'first baseline',
//   'last baseline': 'last baseline',
//   'safe center': 'safe center',
//   'unsafe center': 'unsafe center',
//   'inherit': 'inherit',
//   'initial': 'initial',
//   'unset': 'unset',
// };

export type ContainerProps = {
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
  fontWeight?: 'normal' | 'bold' | 'lighter' | 'bolder' | number,

  alignSelf?: 'auto' | 'normal' | 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end' | 'baseline' | 'first baseline' | 'last baseline' | 'stretch' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'unset',
  alignItems?: $Keys<typeof $alignItems>,
  alignContent?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'normal' | 'baseline' | 'first baseline' | 'last baseline' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'unset',

  justifySelf?: 'auto' | 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'left' | 'right' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'unset',
  justifyItems?: 'auto' | 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'left' | 'right' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center' | 'legacy right' | 'legacy left' | 'legacy center' | 'inherit' | 'initial' | 'unset',
  justifyContent?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end'| 'left' | 'right' | 'normal' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'unset',

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

  onClick?: Function,
};

const Container = (props: ContainerProps) => <ContainerWrapper {...props} />;

export default Container;
