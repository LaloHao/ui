import React from 'react';
import PropTypes from 'prop-types';

import {
  compose,
  renderNothing,
  branch,
} from 'recompact';

import {
  Row,
  Icon,
  Container,
  Link,
  Panel,
  LightBox,
} from 'components';

import {
  StopPropagation,
} from '../handlers';

const hidden = ({ show }) => !show;
const enhance = compose(
  branch(hidden, renderNothing)
);

export const CloseIcon = () => (
  <Icon
    icon="close"
    width="30px"
    height="30px"
    flex="0 0 content"
    style={{ position: 'absolute', right: 0 }}
  />
);

export const CloseButton = ({ onClose }) => (
  <Link onClick={onClose}>
    <CloseIcon />
  </Link>
);
CloseButton.propTypes = {
  onClose: PropTypes.func,
};

export const Modal = enhance(({ children, onClose, header, style }) => (
  <LightBox onClick={onClose}>
    <Panel.Column onClick={StopPropagation} style={style} flex="0 1 content" padding="15px">
      <Row margin="0 0 20px 0" position="relative">
        <Container margin="0 35px 0 0">
          {header}
        </Container>
        <CloseButton onClose={onClose} />
      </Row>
      {children}
    </Panel.Column>
  </LightBox>
));

Modal.propTypes = {
  children: PropTypes.any,
  header: PropTypes.any,
  onClose: PropTypes.func,
  flex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};
