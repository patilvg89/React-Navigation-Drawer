import React, { Component } from 'react';
import { Alert } from 'react-native';

class CustomAlert extends Component {
  render() {
    return (
      Alert.alert(
        this.props.alertTitle,
        this.props.alertMessage,
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: true }
      )
    );
  }
}

export default CustomAlert;

// import React, { Component } from 'react';
// import { Dropdown } from 'react-native-material-dropdown';

// class MaterialDropdown extends Component {
//   render() {
//     return (
//       <Dropdown
//         label={this.props.label}
//         data={this.props.data}
//         containerStyle={this.props.containerStyle}
//       />
//     );
//   }
// }

// export default MaterialDropdown;
