import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Header, Title } from 'native-base';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {useNavigation} from '@react-navigation/native';
import TradingActivityList from "./TradingActivityList";
import MySecurityList from "./MySecurityList";

const Portfolio = ({route}) => {
  const navigation = useNavigation();
  const { pid, pidNumerical, initialValue } = route.params;
  return (
    <Container>
      <View style={{alignItems: "center", marginTop: windowHeight/25}}>
          <Text>Portfolio ID:</Text>
          <Text>{pid}</Text>
          <Text>Value: {initialValue} $</Text>
      </View>
      
      <SafeAreaView style={{ marginTop: 55, flex:1}}>
          <MySecurityList parentPortfolio = {pidNumerical}/>
      </SafeAreaView>
      
      <SafeAreaView style={{ marginTop: 55, flex:1}}>
          <TradingActivityList parentPortfolio = {pidNumerical}/>
      </SafeAreaView>
          
      
      
    </Container>
    
    
  )
}

export default Portfolio;


