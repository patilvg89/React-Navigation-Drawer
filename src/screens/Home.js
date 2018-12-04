import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import {DrawerActions} from 'react-navigation';

class Home extends Component {

    constructor(props) {
        super(props);
        this.openHomeDrawer = this.openHomeDrawer.bind(this)
    }

    openHomeDrawer() {
        this.props.navigation.dispatch(DrawerActions.openDrawer());
    }

    closeDrawer() {
        this.props.navigation.dispatch(DrawerActions.closeDrawer());
    }

    render() {
        return (
            <View>
                <Header headerText="SMS"
                        call={this.openHomeDrawer.bind(this)}
                        navigation={this.props}/>

                <TouchableOpacity onPress={() => {
                    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
                }}>
                    <Text>This is Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Home;
