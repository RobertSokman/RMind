import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { Authenticator, SignIn, SignUp, ConfirmSignUp, Greetings, AmplifyTheme } from 'aws-amplify-react-native';


const AmplifyTheme1 = (props) => {

const map = (message) => {
    if (/incorrect.*username.*password/i.test(message)) {
        return 'Incorrect username or password lalala';
    }

    return message;
}


<Authenticator errorMessage={map}>
    <Greetings
        inGreeting={(username) => 'Hello ' + username}
        outGreeting="Please sign in..."
    />
</Authenticator>



}
export {AmplifyTheme1};