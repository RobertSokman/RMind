import React from "react";
import { View, Text, StyleShee} from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Header, Title, Container  } from 'native-base';
import TabsExample from "../../elements/TabList/ListReminders";
import SearchButton from "../../elements/SearchButton";


const StockList = () => {
  return (
    <Container>
      
      <Header>
        <Title style={{ textAlign: "center", marginTop:20}}>Stock List page</Title>
      </Header>
      <SearchButton/>
      
      
    </Container>
  )
}

export default StockList;
