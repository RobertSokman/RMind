import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Header, Title } from 'native-base';
import NewReminder from "../elements/Reminder.js/NewReminder";
import TaskDescription from "../elements/Reminder.js/NewReminder";
import DueDate from "../elements/Reminder.js/DueDate";

const AddReminder = (props) => {
  
  return (
    
    <Container >
      <View >
          <TaskDescription />
     
          <DueDate />

          <Pressable onPress={() => console.warn('Button was clicked')} 
            style={{alignSelf: "center", height: 40, width: 220, backgroundColor: "gray", borderRadius: 12, marginTop: 160}}>
              <Text style={{color: "white", textAlign:"center"}}>Add new reminder</Text>
          </Pressable>
      </View>
          
      
       
    </Container>
    
    
  )
}

export default AddReminder;