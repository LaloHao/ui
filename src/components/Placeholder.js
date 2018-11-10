import React from 'react';
import { Container, Hidden, Float } from 'components';
import { Spinner } from 'core';
import { Placeholder as t } from 'types';

export const Placeholder = ({ children, placeholder }) => (
  <Container flex={false}>
    <Hidden>
      {children}
    </Hidden>
    <Float flex={1}>
      {placeholder}
    </Float>
  </Container>
);

Placeholder.propTypes = t.Placeholder;
Placeholder.defaultProps = {
  placeholder: <Spinner />,
};
