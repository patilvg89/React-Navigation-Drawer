import React, { Component } from 'react';
import {View, Alert, AsyncStorage} from 'react-native';
import { Card, Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import {onSignIn, USER_KEY} from '../utilities/auth';

// import CustomAlert from '../components/CustomAlert';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date_of_birth: '',
      e_phone_no: ''
    };
  }
  render() {
    return (
      <View style={{ paddingVertical: 20 }}>
        <Card>
          <FormLabel>Date of Birth</FormLabel>
          <FormInput 
            placeholder='Date of Birth...' 
            onChangeText={(dob) => this.setState({ date_of_birth: dob })} 
          />
          {/* <FormValidationMessage>Date of Birth is required</FormValidationMessage> */}
          {/* <FormInput secureTextEntry placeholder='Mobile No...' /> */}
          <FormLabel>Mobile No</FormLabel>
          <FormInput 
            placeholder='Mobile No...'
            onChangeText={(mobileNo) => this.setState({ e_phone_no: mobileNo })}
          />
          {/* <FormValidationMessage>Mobile No is required</FormValidationMessage> */}
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor='#03A9F4'
            title='SIGN IN'
            onPress={() => {
                AsyncStorage.setItem(USER_KEY, 'true')
                this.props.navigation.navigate('SignedIn');

              // onSignIn(this.state.date_of_birth, this.state.e_phone_no).then((data) => {
              //   if (data.status) {
              //     console.log(JSON.stringify(data));
              //     this.props.navigation.navigate('SignedIn');
              //   } else {
              //     Alert.alert('Error', 'Date of Birth or Mobile No is wrong',
              //     [
              //       { text: 'OK', onPress: () => console.log('OK Pressed') }
              //     ],
              //     { cancelable: false }
              //     );
              //   }
              // });
            }}
          />
        </Card>
      </View>
    );
  }
}

export default Login;
// export default ({ navigation }) => (
//   <View style={{ paddingVertical: 20 }}>
//     <Card>
//       <FormLabel>Date of Birth</FormLabel>
//       <FormInput 
            // placeholder='Date of Birth...' onChangeText={(text) => this.setState({ text })}
        // />
//       <FormValidationMessage>Date of Birth is required</FormValidationMessage>
//       {/* <FormInput secureTextEntry placeholder='Mobile No...' /> */}
//       <FormLabel>Mobile No</FormLabel>
//       <FormInput placeholder='Mobile No...' onChangeText={(text) => this.setState({ text })} />
//       <FormValidationMessage>Mobile No is required</FormValidationMessage>
//       <Button
//         buttonStyle={{ marginTop: 20 }}
//         backgroundColor='#03A9F4'
//         title='SIGN IN'
//         onPress={() => {
//           onSignIn().then((data) => {
//             if (data.status) {
//               navigation.navigate('SignedIn');
//             } else {
//               Alert.alert('Error', 'Date of Birth or Mobile No is wrong', 
//               [
//                 { text: 'OK', onPress: () => console.log('OK Pressed') }
//               ],
//               { cancelable: false }
//             );
//           }
//         });
//       }}
//       />
//     </Card>
//   </View>
// );


// import React, { Component } from 'react';
// import { View, Text, Button } from 'react-native';

// class Login extends Component {
  //   login() {
//     this.props.navigation.navigate('Drawer');
//   }
//   render() {
//     const { buttonStyle } = styles;
//     return (
//       <View>
//         <Text>This is Login page.</Text>
//         <Button onPress={() => this.login()} style={buttonStyle} title='Login From Here' />
//       </View>
//     );
//   }
// }

// const styles = {
//   buttonStyle: {
//       flex: 1, // expand component as much as possible
//       alignSelf: 'stretch',
//       backgroundColor: '#fff',
//       borderRadius: 5,
//       borderWidth: 1,
//       borderColor: '#0071ff',
//       marginLeft: 5,
//       marginRight: 5
//   },
//   textStyle: {
//       alignSelf: 'center',
//       color: '#007aff',
//       fontSize: 16,
//       fontWeight: '600',
//       paddingTop: 10,
//       paddingBottom: 10
//   }
// };

// export default Login;
