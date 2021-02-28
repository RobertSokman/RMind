import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import FooterTabsIconExample from "../elements/Footer";
import HeaderLogo from "../elements/Header";
import Template from '../elements/Template';
import BottomTabNavigator from '../navigation/BottomTabNavigator';


const Screen1 = () => {
  return (
      <Container>
        <View>
          <Template/>
          <Image
            style={styles.logo}
            source={require('../../assets/Logo.png')}
          />
                      
          
        </View>
      </Container>
  )
}

export default Screen1;

const styles = StyleSheet.create({

    logo: {
      width: 180,
      height: 80,
      justifyContent: 'center',
      alignSelf: 'center',
      //flex: 'flex-start',
    },
  
  });
  