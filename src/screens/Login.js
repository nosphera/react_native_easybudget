import React, { Component } from 'react';
import {
    Text,
    Button,
    TextInput,
    StyleSheet,
    ScrollView,
    ActivityIndicator
} from 'react-native';

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        isLoggingIn: false,
        message: ''
    }

    _userLogin = () => {

        this.setState({ isLoggingIn: true, message: '' });

        var proceed = false;

      /*
      return fetch("http://easybudget.000webhostapp.com/api/login_post.php", {
                method: "POST",
                headers: {
                    'Content-Type': 'json',
                  },
                body: JSON.stringify({"user":this.state.username,"pass":this.state.password}),                 
            })
            .then((response) => {
                if(response){
                    response.json();
                }
            })
            .then((response) => {
                this.setState({ message: response.status.toString()})
            })
            .catch(err => {
				this.setState({ message: err.message, isLoggingIn: false })
            });
        */
        setTimeout(this.props.onLoginPress, 3000);
    }

    clearUsername = () => {
        this._username.setNativeProps({ text: '' });
        this.setState({ message: '', username:undefined });
    }

    clearPassword = () => {
        this._password.setNativeProps({ text: '' });
        this.setState({ message: '', password:undefined });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
				<Text style={styles.titulo}>Login</Text>
				<TextInput
					ref={component => this._username = component}
					placeholder='Username' 
					onChangeText={(username) => this.setState({username})}
					autoFocus={true}
					onFocus={this.clearUsername}
				/>
				<TextInput 
					ref={component => this._password = component}
					placeholder='Password' 
					onChangeText={(password) => this.setState({password})}
					secureTextEntry={true}
					onFocus={this.clearPassword}
					onSubmitEditing={this._userLogin}
				/>
				{!!this.state.message && (
					<Text
						style={styles.message}>
						{this.state.message}
					</Text>
				)}
				{this.state.isLoggingIn && 
                  <ActivityIndicator />
                }
				<Button style={{marginTop:10}}
					disabled={this.state.isLoggingIn||!this.state.username||!this.state.password}
		      		onPress={this._userLogin}
		      		title="Submit"
		      	/>
	      </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      padding: 20,
    },
    titulo: {
      fontSize: 28,
      textAlign: 'center',
      margin: 10,
    },
    messages: {
        fontSize: 14, 
        color: 'red', 
        padding: 5
    },
  });