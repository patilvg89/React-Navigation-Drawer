import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import MaterialDropdown from '../components/Dropdown';

const authUrl = 'http://192.168.56.1:3000/';

class ExamHistory extends Component {
  state = { examList: [] };
  
  componentWillMount() {
    fetch(authUrl + 'getResultByStudentId', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        studentId: '5b668aef23eed121a5224538'
      })
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log('in fetch response -------------------------');
      console.log(responseJson);
      if (responseJson.status) {
        // this.setState({ examList: responseJson.data });
        const data = [{
          value: 'Banana',
        }, {
          value: 'Mango',
        }, {
          value: 'Pear',
        }];
        this.setState({ examList: data });
        console.log(this.setState);
      } else {
        console.log(JSON.stringify(responseJson));
      }
    });
  }

  render() {
    // const data = [{
    //   value: 'Banana',
    // }, {
    //   value: 'Mango',
    // }, {
    //   value: 'Pear',
    // }];
    // const data = this.state.examList;
    console.log('==========================');
    console.log(this.state.examList);
    console.log('===========================');
    const { 
      containerStyle,
      examSelector,
      dropdownContainerStyle,
      resultContainer
    } = styles;
    return (
      <View>
        <Header headerText="SMS" navigation={this.props.navigation} />
        <View style={containerStyle}>
          <View style={examSelector}>
            <MaterialDropdown 
              data={this.state.examList}
              label='Choose Exam'
              containerStyle={dropdownContainerStyle}
            />
          </View>
          <View style={resultContainer}>
            <Text>This is result Description</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ExamHistory;

const styles = StyleSheet.create({
  containerStyle: {
  },
  examSelector: {
    // flex: 1
  },
  dropdownContainerStyle: {
    margin: 40
  },
  resultContainer: {
    flex: 1,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    alignItems: 'center'
  }
});
