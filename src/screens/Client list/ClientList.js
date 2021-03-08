import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Header, Title } from 'native-base';


const ClientList = () => {
  return (
    <Container>
      <View>
      <Header style={{height: 44, backgroundColor: 'white'}}>
        <Title style={{ textAlign: "center", marginTop:10}}>Client list</Title>
      </Header>
      
      </View>
    </Container>
  )
}

export default ClientList;
