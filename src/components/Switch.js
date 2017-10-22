import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Div, Input, Label } from './style';

class Switch extends Component {
  /**
   * React Component constructor.
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      checked: props.checked
    };
  }

  /**
   * OnChange method to set checked state
   * @return {[type]} [description]
   */
  onChange = (e) => {
    this.setState({
      checked: !this.state.checked
    }, () => {
      this.props.onChange(e, this.state.checked, this.props.id);
    });
  }

  /**
   * React render.
   * @returns {XML}
   */
  render() {
    return (
      <Div>
        <Input
          type="checkbox"
          id={this.props.id}
          onChange={this.onChange}
          checked={this.state.checked}
        />
        <Label
          htmlFor={this.props.id}
        />
      </Div>
    );
  }
}

/**
 * Component PropTypes
 * @type {{show: *, overlay: *}}
 */
Switch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};

export default Switch;
