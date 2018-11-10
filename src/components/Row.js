import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'components';
import {
  get,
  without,
  withProps,
  between,
} from 'components/util';

const Raw = Container.extend`
  flex-direction: row;
`;

export const Row = (props) => {
  const spacing = get('spacing')(props);
  const children = get('children')(props);

  if (!spacing || !Array.isArray(children)) { return <Raw {...props} />; }

  // const space = <Container margin={`0 ${spacing} 0 0`} />;
  const space = withProps({ margin: `0 ${spacing} 0 0`, flex: '0 1 auto' })(Container);
  const newProps = without('spacing', 'children')(props);

  return (
    <Raw {...newProps}>
      {children.reduce(between(space))}
    </Raw>
  );
};

Row.propTypes = {
  children: PropTypes.any,
  spacing: PropTypes.string,
};
