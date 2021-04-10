//entry file

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import Router from "./src/navigation/Router";
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/elements/LogIn';
import {Authenticator, AmplifySignIn, hideSignUp} from 'aws-amplify-react-native'
import awsconfig from './src/aws-exports'

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

import { withAuthenticator } from 'aws-amplify-react-native'
import { AmplifyTheme } from './src/screens/AmplifyTheme/index'

/*Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
})


const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password',
    },
  ],
}


<Authenticator
        usernameAttributes="email"
        signUpConfig={signUpConfig}
        theme={AmplifyTheme}
        />
*/

const App = () => {
  
  return (
      <>
        
        
        <Router />

        
      </> 

  );
}

export default withAuthenticator(App, false, [], null, AmplifyTheme)

const styles = StyleSheet.create({

  logo: {
    width: 180,
    height: 80,
    justifyContent: 'center',
    alignSelf: 'center',
    //flex: 'flex-start',
  },

});
