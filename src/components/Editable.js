import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder, Label, Input } from 'components';

export class Editable extends React.Component {
  constructor(props) {
    super(props);
    const { value } = props;
    this.state = {
      value: {
        old: value,
        new: value,
      },
      editing: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.Edit = this.Edit.bind(this);
  }

  onChange(event) {
    const { value } = event.nativeEvent.target;
    const { old } = this.state.value;
    this.setState({ value: { old, new: value } });
  }

  onBlur() {
    const { value } = this.state;
    if (value.old !== value.new) {
      if (this.props.onChange(value.new)) {
        value.old = value.new;
        this.setState({ value });
      }
    }
    this.setState({ editing: false });
  }

  onKeyDown({ key, target }) {
    if (key === 'Enter') {
      target.blur();
    }
  }

  Input() {
    const { area, text } = this.props;

    const handlers = {
      value: this.state.value.new,
      onChange: this.onChange,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      autoFocus: true,
    };

    return (
      <Input {...this.Props()} {...handlers} />
    );
  }

  Edit() {
    if (this.props.disabled) {
      return;
    }
    this.setState({ editing: true });
  }

  Label() {
    return (
      <Label {...this.Props()} onClick={this.Edit}>
        {this.state.value.old}
      </Label>
    );
  }

  Props() {
    const props = this.props;
    const undesired = ['onChange', 'onBlur', 'text', 'area', 'value', 'onKeyDown', 'autofocus'];
    for (const prop in undesired) {
      if (Reflect.has(props, prop)) {
        delete props[prop];
      }
    }
    return props;
  }

  render() {
    const { editing } = this.state;
    if (editing) { return this.Input(); }
    return this.Label();
  }
}

Editable.displayName = 'Editable';

Editable.propTypes = {
  text: PropTypes.bool,
  area: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

Editable.defaultProps = {
  text: true,
};
