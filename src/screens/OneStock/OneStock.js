import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Header, Title } from 'native-base';
import BottomTabNavigator from "../../navigation/BottomTabNavigator";


const OneStock = () => {
  return (
    <Container>
        <View>
        <Header>
            <Title style={{ textAlign: "center", marginTop:20}}>Dashboard</Title>
        </Header>
        
        </View>
       
    </Container>
    
    
  )
}

export default OneStock;