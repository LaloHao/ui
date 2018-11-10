import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { branch, renderComponent } from 'recompact';
import { Column, Label, Span } from 'components';
import { flex } from 'components/util';
// import Raw from '../../../components/Input';

// const Themes = {};

const theme = (prop) => {
  if (!prop.theme) {
    return `
    &:focus {
      box-shadow: 0px 5px 7px #d3dbec;
      background-color: #fff;
      cursor: text;
    }
  `;
  }
  // return Themes[prop.theme];
  return null;
};

const Enabled = styled.input`
  ${flex};
  border: 0px;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  background-color: rgb(230, 237, 245);
  cursor: pointer;
  ${theme}
`;

const Disabled = ({ value, flex, ...props }) => (
  <Span
    flex={flex}
    {...props}
  >
    {value}
  </Span>
);
Disabled.propTypes = {
  value: PropTypes.string,
  flex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
Disabled.defaultProps = {
  value: '',
  flex: '0 1 auto',
};

const Input = ({ disabled, ...props }) => {
  if (disabled) {
    return <Disabled {...props} />;
  }
  return <Enabled {...props} />;
};
Input.propTypes = {
  disabled: PropTypes.bool,
};

const InputWithLabel = ({ label, ...props }) => (
  <Column spacing="5px">
    <Label>{label}</Label>
    <Input {...props} />
  </Column>
);
InputWithLabel.propTypes = {
  label: PropTypes.string,
};

const InputLabelMaybe = ({ label, ...props }) => {
  if (label) {
    return <InputWithLabel label={label} {...props} />;
  }
  return <Input {...props} />;
};
InputLabelMaybe.propTypes = {
  label: PropTypes.string,
};

export default InputLabelMaybe;
