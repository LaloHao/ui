import React from 'react';
import PropTypes from 'prop-types';
import {
  compose,
  branch,
  setDisplayName,
  renderComponent,
  createHelper,
  createEagerFactory,
} from 'recompact';
// import { createCompactableHOC } from 'recompact/utils';
import { Spinner } from 'core';
import { Container } from 'components';

const Message = ({ route }) => {
  if (!route) {
    return null;
  }
  return (
    <Container flex="1" justifyContent="center" alignItems="center">
      <Spinner />
    </Container>
  );
};
Message.propTypes = {
  route: PropTypes.object,
};

export const withLoading =
  predicate => branch(predicate, renderComponent(Message));

// const _withLoading = predicate => (BaseComponent) => {
//   let factory;
//   // return branch(predicate, renderComponent(Message), BaseComponent);
//   return (props) => {
//     if (predicate(props)) {
//       factory = createEagerFactory(BaseComponent);
//     } else {
//       factory = createEagerFactory(Message);
//     }
//     console.log(factory(props));
//     return factory(props);
//   };
// };

// export const withLoading = createHelper(_withLoading, 'withLoading');

export const Loading = ({ loading, children }) => loading? Message() : children;

Loading.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.any,
};
