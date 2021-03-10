import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Header, Title } from 'native-base';

const AddReminder = (props) => {
  
  return (
    
    <Container >
      <View>
        
          <Text style={{textAlign:"center", marginTop: 20, fontSize: 20, fontWeight: "bold"}}>Add Reminder here</Text>
          <Text style={{textAlign:"center", fontSize: 20}}>To</Text>
          <Text style={{textAlign:"center", marginTop: 20, fontSize: 20}}>be</Text>
          <Text style={{textAlign:"center", marginTop: 190, fontSize: 30}}>continued</Text>
          
          
      </View>  
       
    </Container>
    
    
  )
}

export default AddReminder;