import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Header, Title } from 'native-base';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {useNavigation} from '@react-navigation/native';
import TradingActivityList from "./TradingActivityList";

const TradingHistory = ({route}) => {
  
  const { papa } = route.params;
  const lala = papa;
  return (
    <Container>
      
      <SafeAreaView style={{ marginTop: 0, flex:1}}>
          <TradingActivityList parentPortfolio = {lala}/>
      </SafeAreaView>
      
    </Container>
    
    
  )
}

export default TradingHistory;


