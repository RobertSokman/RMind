import React from "react";
import { View, Text, StyleShee, SafeAreaView} from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Header, Title, Container  } from 'native-base';
import TabsExample from "../../elements/TabList/ListReminders";
import SearchButton from "../../elements/SearchButton";
import securities from "../../../assets/data/securities";
import Security from "../../elements/Security/Security";
import FullList from "./FullList";


const StockList = () => {
  return (
    <Container>
      <View>
        <Header>
          <Title style={{ textAlign: "center", marginTop:20}}>Stock List page</Title>
        </Header>
      
        <SafeAreaView>
          <FullList />
        </SafeAreaView>
      
      </View>
    </Container>
  )
}

export default StockList;
