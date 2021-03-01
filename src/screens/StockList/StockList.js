import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Header, Title } from 'native-base';


const StockList = () => {
  return (
    <View>
      <Header>
        <Title style={{ textAlign: "center", marginTop:20}}>Stock List page</Title>
        
      </Header>
    </View>
  )
}

export default StockList;
