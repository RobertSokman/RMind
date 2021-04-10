import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Pressable } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';

import { Auth } from 'aws-amplify';

const SignOutButton = () => {
    const signOut = () =>{
        Auth.signOut();
     }

  return (
      <Pressable onPress={signOut}>
          <Text>Sign out</Text>
    </Pressable>
  )
}
 
export default SignOutButton;
