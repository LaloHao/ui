import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'components';

export const Hidden = ({children}) => (
  <Container visibility="hidden">
    {children}
  </Container>
);

Hidden.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
  ]),
};
