import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Template from "../../elements/Template";
import { Dimensions, Pressable } from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto";
import SearchButton from "../../elements/SearchButton";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const StockList = () => {
  return (
    <View>
      <Template />
      
      <Text>Stock List page</Text>
      
    </View>
  )
}

export default StockList;
