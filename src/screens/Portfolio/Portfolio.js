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
  const lala = pidNumerical;
  return (
    <Container>
      <View style={{alignItems: "center", marginTop: windowHeight/40, marginBottom:10}}>
          <Text style={{fontWeight:"bold", fontSize: 18 , color:"black"}}>Portfolio ID: {pid}</Text>
          <Text style={{fontWeight:"bold", fontSize: 18, color:"black"}}>Value: {initialValue} £</Text>
      </View>
      
      <SafeAreaView style={{ marginTop: 0, flex:1}}>
          <MySecurityList parentPortfolio = {pidNumerical}/>
      </SafeAreaView>

      <View style={{marginTop: 80}}>
        <Pressable  style={{marginBottom: 50, marginRight: 20}} onPress={() => navigation.navigate("Trading History", {papa: lala})}>
            <Text style={{color: "#003662", alignSelf:"flex-end", marginRight: 10, textAlignVertical: "center"}}>See trading history</Text>
        </Pressable>
      </View>
    </Container>
    
    
  )
}

export default Portfolio;


