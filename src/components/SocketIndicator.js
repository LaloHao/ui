import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Label } from 'components';
import { compose, setDisplayName } from 'recompact';
import { Index } from 'assets';

const Message = () => (
  <Container
    zIndex={Index.SocketIndicator}
    position="absolute"
    top="5px"
    right="0"
    left="0"
    backgroundColor="transparent"
    justifyContent="center"
    alignItems="center"
  >
    <Container
      backgroundColor="#ff6900"
      borderRadius="7px"
      padding="10px"
    >
      <Label color="white">
        Conexión interrumpida. Tus cambios serán sincronizados cuando tu
        conexion sea restaurada.
      </Label>
    </Container>
  </Container>
);

const state = ({ socket: { connected } }) => ({ connected });

const SocketIndicator = ({ connected }) => {
  if (!global.localStorage.getItem('token')) {
    return null;
  }
  if (connected) {
    return null;
  }
  return <Message />;
};
SocketIndicator.propTypes = {
  connected: PropTypes.bool,
};

const enhance = compose(
  setDisplayName('SocketIndicator'),
  connect(state),
);

export default enhance(SocketIndicator);
