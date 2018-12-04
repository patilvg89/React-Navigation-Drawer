import React from 'react';
import {Dimensions, Platform, StatusBar} from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
// import { FontAwesome } from 'react-native-vector-icons';
import Home from './screens/Home';
import ExamHistory from './screens/ExamHistory';
import Account from './screens/Account';
import Setting from './screens/Setting';
import AboutUs from './screens/AboutUs';
import Drawer from './components/Drawer';

const DEVICE_WIDTH = Dimensions.get('window').width;

const headerStyle = {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
};

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Home
    },
    ExamHistory: {
        screen: ExamHistory
    },
    Account: {
        screen: Account
    },
    Setting: {
        screen: Setting
    },
    AboutUs: {
        screen: AboutUs
    }
}, {
    initialRouteName: 'Home',
    contentComponent: props => <Drawer {...props} />,
    headerStyle,
    headerMode: 'none',
    gesturesEnabled: true,
});

