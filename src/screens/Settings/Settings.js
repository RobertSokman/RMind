import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Header, Title } from 'native-base';


const Settings = () => {
  return (
    <Container>
      <View>
        <Header style={{height: 44, backgroundColor: 'white'}}>
          <Title style={{ textAlign: "center", marginTop:10}}>Settings</Title>
        </Header>
      
      </View>
    </Container>
    
  )
}

export default Settings;
