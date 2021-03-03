import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Title } from "native-base";
import TabsExample from "../../elements/TabList/ListReminders";
import {  Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Reminders = () => {
  return (
    <Container>
      <Header>
        <Title style={{ textAlign: "center", marginTop:20}}>Reminders</Title>
      </Header>
      <TabsExample /> 
    </Container>
  )
}

export default Reminders;


const styles = StyleSheet.create({
  textTest: {
    
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 130,
    fontSize: 30,
    fontWeight: 'bold',
  },
  
});


//functional component