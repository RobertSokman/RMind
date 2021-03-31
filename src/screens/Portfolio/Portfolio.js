import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Header, Title } from 'native-base';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {useNavigation} from '@react-navigation/native';


const Portfolio = ({route}) => {
  const navigation = useNavigation();
  const { pid } = route.params;
  return (
    <Container>
      <View style={{alignItems: "center", marginTop: windowHeight/25}}>
          <Text>Portfolio ID:</Text>
          <Text>{pid}</Text>
      </View>
      <View style={{marginTop: windowHeight/25, alignItems: "center"}}>

          <Pressable onPress={() => navigation.navigate("Security")}>
            <Text style={{marginBottom: 10}}>Security 1</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Security")}>
            <Text style={{marginBottom: 10}}>Security 2</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Security")}>
            <Text style={{marginBottom: 10}}>Security 3</Text>
          </Pressable>
          
      </View>
    </Container>
    
  )
}

export default Portfolio;