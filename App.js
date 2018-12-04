import React, {Component} from 'react';
import {AppDrawerNavigator} from './src/router';
import {createAppContainer} from 'react-navigation'

export default class App extends Component {

    render() {
        const MyAppContainer = createAppContainer(AppDrawerNavigator);

        return <MyAppContainer/>;
    }
}
