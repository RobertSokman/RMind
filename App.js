//entry file

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import Router from "./src/navigation/Router";
import { NavigationContainer } from '@react-navigation/native'

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)


export default function App() {
  return (
      <>
        
        <Router />

      </>

  );
}

const styles = StyleSheet.create({

  logo: {
    width: 180,
    height: 80,
    justifyContent: 'center',
    alignSelf: 'center',
    //flex: 'flex-start',
  },

});
