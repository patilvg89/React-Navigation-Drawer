import React, {Component} from 'react';
import {AppDrawerNavigator} from './src/router';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <AppDrawerNavigator/>;
    }
}
