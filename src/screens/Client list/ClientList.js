import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Header, Title } from 'native-base';
import Clients from "../../elements/ClientList/Clients";


const ClientList = () => {
  return (
    <Container>
      <View>
      <Header style={{height: 44, backgroundColor: 'white'}}>
        <Title style={{ textAlign: "center", marginTop:10}}>Client list</Title>
      </Header>
      <Clients/>
      </View>
    </Container>
  )
}

export default ClientList;
