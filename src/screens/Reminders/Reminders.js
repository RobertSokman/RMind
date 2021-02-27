import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Template from "../../elements/Template";
import { Dimensions, Pressable } from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto";
import SearchButton from "../../elements/SearchButton";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const Reminders = () => {
  return (
    <View>
      <Template />
      
      <SearchButton />
      
    </View>
  )
}

export default Reminders;


const styles = StyleSheet.create({
  textTest: {
    
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 130,
    fontSize: 30,
    fontWeight: 'bold',
  },
  
});


//functional component