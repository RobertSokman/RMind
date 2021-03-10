import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Header, Title } from 'native-base';
import BottomTabNavigator from "../../navigation/BottomTabNavigator";
import securities from "../../../assets/data/securities";
import OneSecurity from "../../elements/OneSecurity";


const OneStock = (props) => {
  
  return (
    
    <Container >
      <View>
        
          <Text style={{textAlign:"center", marginTop: 20, fontSize: 20, fontWeight: "bold"}}>Security name</Text>
          <Text style={{textAlign:"center", fontSize: 20}}>Security code</Text>
          <Text style={{textAlign:"center", marginTop: 20, fontSize: 20}}>Price and Currency</Text>
          <Text style={{textAlign:"center", marginTop: 190, fontSize: 30}}>Price chart</Text>
          
          
      </View>  
       
    </Container>
    
    
  )
}

export default OneStock;