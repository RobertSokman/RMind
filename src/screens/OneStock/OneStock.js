import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Header, Title } from 'native-base';
import BottomTabNavigator from "../../navigation/BottomTabNavigator";
import securities from "../../../assets/data/securities";
import OneSecurity from "../../elements/OneSecurity";


const OneStock = () => {
  return (
    <Container >
        
          <FlatList data={securities} renderItem={({item}) => 
              <OneSecurity security={item} />}>
          </FlatList>
        
        
       
    </Container>
    
    
  )
}

export default OneStock;