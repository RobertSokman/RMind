import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import LogIn from "../../elements/SignIn/LogIn";

const SignIn = () => {
  return (
      <Container>
        <View>
          <Header>
            <Image
              style={styles.logo}
              source={require('../../../assets/Logo.png')}
            />
          </Header>  
         <LogIn 
         
         />

        </View>
      </Container>

      
  )
}

export default SignIn;

const styles = StyleSheet.create({

    logo: {
      width: 180,
      height: 80,
      justifyContent: 'center',
      alignSelf: 'center',
      //flex: 'flex-start',
    },
  
  });