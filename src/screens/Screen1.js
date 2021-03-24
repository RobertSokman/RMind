import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import Todaytasks from '../elements/Homescreen/Todaytasks';
import Tasks from '../elements/Homescreen/Tasks';
 
const Screen1 = () => {
  return (
      <Container>
        <View>
          <Header style={{height: 44, backgroundColor: 'white'}}>
 
            <Image
              style={styles.logo}
              source={require('../../assets/Logo.png')}
            />
          </Header>
          <Text> <Todaytasks/> </Text>
          <Text> <Tasks/> </Text>
                
          
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
      marginBottom: 10,
    },
  
  });