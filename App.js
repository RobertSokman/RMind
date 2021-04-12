//entry file

import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TextInput, Dimensions, ImageBackground, Pressable } from 'react-native';
import 'react-native-gesture-handler';
import Router from "./src/navigation/Router";
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/elements/LogIn';
import {Authenticator, AmplifySignIn, hideSignUp, SignInButton} from 'aws-amplify-react-native'
import awsconfig from './src/aws-exports'
import { ConfirmSignIn, ConfirmSignUp, ForgotPassword, RequireNewPassword, SignIn, SignUp, VerifyContact } from 'aws-amplify-react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { AmplifyTheme1 } from './src/screens/AmplifyTheme/index2'
import LogIn from './src/elements/LogIn';
import { Auth } from 'aws-amplify';
import Amplify, { signInButton } from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

import { withAuthenticator } from 'aws-amplify-react-native'
import { AmplifyTheme } from './src/screens/AmplifyTheme/index'
import { Container } from 'aws-amplify-react-native/dist/AmplifyUI';
import { set, Value } from 'react-native-reanimated';


const App = () => {
  
  return (
      <>
        
        
        <Router />
        
        
      </> 

  );
}

class MySignIn extends SignIn {
  /*state = {
    username: '',
    password: ''
  }
  handleUsername = (text) => {
    this.setState({ username: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  */
  render() {
    /*const [userN, setUserN] = useState('');  
    const [code, setCode] = useState('');*/
    
    async function signIn() {
      try {
          const user = await Auth.signIn('Robert', 'password');
      } catch (error) {
          console.log('error signing in', error);
      }
    }
    
    return(
      <Container>
        <View>
          <ImageBackground source={require('./assets/skyBackground.jpg')} style={{width: windowWidth, height: windowHeight}}>
            <Image
              style={{width: windowWidth, height: windowHeight/10, marginTop: windowHeight/10}}
              source={require('./assets/Logo.png')}
            />
            
            <View style={{marginTop: windowHeight/3}}>
            <View style={styles.inputView}>
            <TextInput  
              style={styles.inputText}
              placeholder="Username" 
              placeholderTextColor="#003f5c"
              //onChangeText={() => setUserN({ userN: text})}
              //onChangeText={this.handleUsername}
              />
            </View>
            <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Password" 
              placeholderTextColor="#003f5c"
              //onChangeText={() => setCode({ password: text})}
              //onChangeText={this.handlePassword}
              />
            </View>
            <Pressable onPress = { signIn } 
            style={styles.loginBtn}>
              <Text style={{color: "white", textAlign:"center"}}>Sign in</Text>
            </Pressable>
            </View>
            
          </ImageBackground>
        </View>
      </Container>
    )}
}

export default withAuthenticator(App,false, [<MySignIn/>], AmplifyTheme)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#465881",
    marginBottom:650
  },
  inputView:{
    width:"80%",
    backgroundColor:'lightblue',
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    alignSelf: 'center',
    padding:20,
    
  },
  inputText:{
    height:50,
    color:"white",
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    width: windowWidth/2.5,
    alignSelf: 'center',
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
  },
  loginText:{
    color:"white"
  }
});
