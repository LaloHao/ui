import React from 'react';
import styled from 'styled-components';
import select from 'react-select';
import type from 'types/Select';
import { flex } from './util';

const Raw = styled(select)`
  ${flex};
`;

export const Select = ({ placeholder, noResultsText, optionComponent, valueComponent, component, options, value, onChange, ...props }) => (
  <Raw
    {...props}
    renderLabel
    clearable={false}
    label
    name="form-field-name"
    placeholder={placeholder}
    noResultsText={noResultsText}
    optionComponent={optionComponent || component.Option}
    valueComponent={valueComponent || component.Value}
    options={options}
    value={value}
    onChange={onChange}
  />
);

Select.propTypes = type;
