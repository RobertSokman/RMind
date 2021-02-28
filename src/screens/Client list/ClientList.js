import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Template from "../../elements/Template";
import { Dimensions, Pressable } from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto";
import SearchButton from "../../elements/SearchButton";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const ClientList = () => {
  return (
    <View>
      <Template />
      
      <Text>Client List page</Text>
    </View>
  )
}

export default ClientList;
