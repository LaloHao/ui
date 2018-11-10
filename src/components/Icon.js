import React from 'react';
import { Container, Icons } from 'components';
import styled from 'styled-components';

const icon = props => `url(${Icons[props.icon]})`;

// export const Icon = styled.a`
//   ${Container.style}
//   ${icon}
// `;

export const Icon = Container.extend`
  background-image: ${icon};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
`;
