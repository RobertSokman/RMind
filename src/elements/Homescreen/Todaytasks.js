import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
 
const Todaytasks = () => {
  return (
   
        <View>
          <Icon name="person-circle-outline" style={{fontSize: 160,  marginTop:30, marginHorizontal:100, color: "darkblue"}} />
          <Text style={{
              marginTop:30,
              marginHorizontal:90,
              fontWeight: 'bold',
              color: 'darkblue',
              }}> 
              Welcome back John Smith!
          </Text>
          <Text style={{
               marginTop:50,
               marginHorizontal:45,
               color: 'darkblue', 
          }}> Today's Tasks: </Text> 
         
        </View>
        
     
  )
  
}
 
export default Todaytasks;