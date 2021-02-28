import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Template from "../../elements/Template";
import { Dimensions, Pressable } from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto";
import SearchButton from "../../elements/SearchButton";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import ListDividerExample from "../../elements/AllRemindersList";
import { Container, Title } from "native-base";
import SegmentOutsideHeaderExample from "../../elements/RemindersSegment";

const Reminders = () => {
  return (
    <Container>
      <View>
        
        <Template/>
        <Title style={{marginTop: 50, textAlign: "center"}}>Reminders</Title>
        <SegmentOutsideHeaderExample />
        <SearchButton />

        <Text style={{marginTop: 180, position: "absolute"}}>
          <ListDividerExample />
        </Text>
        
      </View>
    </Container>
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