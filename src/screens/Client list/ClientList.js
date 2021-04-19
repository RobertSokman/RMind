import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Header, Title } from 'native-base';
import ClientName from "../../elements/ClientList/Clients";
import ClientListItem from "./ClientListItem";



const ClientList = () => {
  return (
    <Container>
      <View style={{flex:1}}>
        <Header style={{height: 44, backgroundColor: '#003662'}}>
          <Title style={{ textAlign: "center", marginTop:10, color: 'white'}}>Client list</Title>
        </Header>
        <SafeAreaView style={{flex:1}}>
         <ClientListItem />
        </SafeAreaView>
      </View>
    </Container>
  )
}

export default ClientList;
