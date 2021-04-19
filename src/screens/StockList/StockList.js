import React from "react";
import { View, Text, StyleShee, SafeAreaView} from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Header, Title, Container  } from 'native-base';
import TabsExample from "../../elements/TabList/ListReminders";
import Lala from "../../elements/SearchButton";
import securities from "../../../assets/data/securities";
import Security from "../../elements/Security/Security";
import FullList from "./FullList";



const StockList = () => {
  return (
    <Container>
      <View style={{flex: 1}}>
        <Header style={{height: 44, backgroundColor: '#003662'}}>
          <Title style={{ textAlign: "center", marginTop:10, color: 'white'}}>Stock List page</Title>
        </Header>
        
        <SafeAreaView style={{ marginTop: 5, flex:1}}>
          <FullList />
        </SafeAreaView>
      
      </View>
    </Container>
  )
}

export default StockList;
