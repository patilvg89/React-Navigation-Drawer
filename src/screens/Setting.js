import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

class Setting extends Component {
  render() {
    return (
      <View>
        <Header headerText="SMS" navigation={this.props.navigation} />
        <Text>This is Settings Page</Text>
      </View>
    );
  }
}
export default Setting;
