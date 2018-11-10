import React from 'react';
import styled from 'styled-components';
import { Colors } from 'assets';

export const Separator = styled.div`
  flex: 1;
  margin: 10px 2px;
  border-top: solid 1px ${Colors.Shadow};
`;

export const HR = Separator;
