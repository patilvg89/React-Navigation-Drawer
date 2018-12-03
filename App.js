/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
// import Login from './src/screens/Login';
import { isSignedIn } from './src/utilities/auth';
import { createRootNavigator } from './src/router';
// import Drawer from './src/components/Drawer';
// import DrawerNavigator from './src/screens';

// const AppNavigator = StackNavigator(
//   {
//     Login: { screen: Login },
//     Drawer: { 
//       screen: ({ navigation }) => <DrawerNavigator 
//       screenProps={{ rootNavigation: navigation }} /> 
//     }
//   },
//   {
//     index: 0,
//     initialRouteName: 'Login',
//     headerMode: 'none'
//   }
// );

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => this.setState({ signedIn: err.message, checkedSignIn: false }));
}
  render() {
    const { checkedSignIn, signedIn } = this.state;
    if (!checkedSignIn) {
      return null;
    }
    const Layout = createRootNavigator(signedIn);
    const AppContainer = createAppContainer(Layout);
    return <AppContainer />;

    // return (
    //   <AppNavigator />
    //   // <DrawerNavigator />
    // );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   }
// });
