import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  transition: all 3s ease;
`;

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    const collapsed = props.initialCollapse || false;
    this.state = { collapsed };
  }

  collapse() {
    this.setState({ collapsed: true });
    if (this.props.onCollapse) {
      this.props.onCollapse();
    }
  }

  expand() {
    this.setState({ collapsed: false });
    if (this.props.onExpand) {
      this.props.onExpand();
    }
  }

  toggle() {
    const { collapsed } = this.state;
    this.setState({ collapsed: !collapsed });
    if (this.props.onToggle) {
      this.props.onToggle(collapsed);
    }
  }

  render() {
    if (!this.state.collapsed) {
      return this.props.children;
    }
    return null;
  }
}
Collapse.displayName = 'Collapse';
Collapse.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
  initialCollapse: PropTypes.bool,
  onCollapse: PropTypes.func,
  onExpand: PropTypes.func,
  onToggle: PropTypes.func,
};
Collapse.defaultProps = {
  initialCollapse: false,
};

export default Collapse;
