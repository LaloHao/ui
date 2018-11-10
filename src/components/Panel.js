import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Column } from 'components';

const style = `
  background-color: white;
  min-width: 100px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  box-shadow: 0 4px 6px 0 #E2E8F2;
`;

export const Panel = Container.extend`${style}`;

const tChildren = PropTypes.any;

Panel.Row = props => (
  <Panel>
    <Row {...props}>
      {props.children}
    </Row>
  </Panel>
);
Panel.Row.propTypes = {
  children: tChildren,
};

Panel.Column = props => (
  <Panel>
    <Column {...props}>
      {props.children}
    </Column>
  </Panel>
);
Panel.Column.propTypes = {
  children: tChildren,
};
