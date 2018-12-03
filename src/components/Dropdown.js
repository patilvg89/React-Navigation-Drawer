import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';

class MaterialDropdown extends Component {
  render() {
    return (
      <Dropdown
        label={this.props.label}
        data={this.props.data}
        containerStyle={this.props.containerStyle}
      />
    );
  }
}

export default MaterialDropdown;
