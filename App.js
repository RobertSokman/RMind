//entry file

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import Reminders from "./src/screens/Reminders/Reminders";
import Screen1 from "./src/screens/Screen1";
import 'react-native-gesture-handler';
import Router from "./src/navigation/Router";
import { NavigationContainer } from '@react-navigation/native'



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
