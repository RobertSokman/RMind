import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { TextInput, Dimensions, Pressable } from 'react-native';
import { Container, Header, Title } from 'native-base';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createReminder } from "../graphql/mutations";
import { useEffect } from "react/cjs/react.development";
import { color } from "react-native-reanimated";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const AddReminder = (props) => {

  const [value1, onChangeText1] = React.useState('Description');
  const [value2, onChangeText] = React.useState('Description');

  const newDescription = async () => {
    try {
      const Description1 = await API.graphql(graphqlOperation
        (createReminder, {input: {description: value1, dueDate: value2}}))
      }                                
      catch (e) {
      console.log(e);
      }
    }
      
  return (   
    <Container >
      <View >
          <Text>Description:</Text>
          <TextInput
          
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 12, width: windowWidth-40, alignSelf: "center", marginTop: 5 }}
          onChangeText={text => onChangeText1(text)}
          value1={value1}
          />
          <Text>Date (YYYY-MM-DD)</Text>
          <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 12, width: windowWidth-40, alignSelf: "center", marginTop: 5 }}
          onChangeText={text => onChangeText(text)}
          value2={value2}
          />


          <Pressable onPress= {newDescription} 
            style={{alignSelf: "center", height: 40, width: 220, backgroundColor: "gray", borderRadius: 12, marginTop: 160}}>
              <Text style={{color: "white", textAlign:"center"}}>Add new reminder</Text>
          </Pressable>
      </View>
          
      
       
    </Container>
    
    
  )
}

export default AddReminder;