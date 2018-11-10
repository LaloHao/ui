import React from 'react';
import { Container, Float } from 'components';
import { Colors, Index } from 'assets';

export const LightBox = Container.extend`
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${Colors.LightBox};
  z-index: ${Index.LightBox};
`;
