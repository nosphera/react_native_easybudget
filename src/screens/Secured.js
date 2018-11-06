import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    Button
} from 'react-native';

export default class Secured extends Component {
    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{marginBottom:20,fontSize: 27}}>Essa é a página de conteúdo</Text>
                <Button onPress={this.props.onLogoutPress} title="Logout"/>
            </ScrollView>);
    }
}