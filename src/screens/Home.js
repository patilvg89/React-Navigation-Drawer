import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

class Home extends Component {
  render() {
    return (
      <View>
        <Header headerText="SMS" navigation={this.props.navigation} />
        <Text>This is Home</Text>
      </View>
    );
  }
}

export default Home;
