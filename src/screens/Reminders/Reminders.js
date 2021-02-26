import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Template from "../../elements/Template";
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;

const Reminders = (props) => {
  return (
    <View>
      <Template />
      <Text style={styles.textTest}>This is the Reminders page.</Text>
    </View>
  )
}

export default Reminders;


const styles = StyleSheet.create({
  textTest: {
  
    textAlign: "center",
    textAlignVertical: "center",
    top: windowHeight/2,

  },
});


//functional component