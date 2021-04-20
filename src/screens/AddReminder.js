import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, FormDatePicker} from "react-native";
import { TextInput, Dimensions, Pressable } from 'react-native';
import { Container, Header, Title, Textarea, Content, Form, Input, Item, Card, CardItem,Body, Separator} from 'native-base';
import { useEffect} from "react/cjs/react.development";
import { color } from "react-native-reanimated";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createReminder } from "../graphql/mutations";

const AddReminder = (props) => {
 
  const [value1, onChangeText1] = useState('');
  const [value2, onChangeText] = useState('');
  
  const newDescription = async () => {
    try {
      await API.graphql(graphqlOperation
        (createReminder, {input: {description: value1, dueDate: value2}}))
      }                               
      catch (e) {
      console.log(e);
      }
    }

    const buttonPress = () => {
      newDescription();
      alert("You have added a new Reminder!");
    }
    
  return (  
 
    
  
    <Container >

 
    
      <Title style={{textAlign:"left", fontWeight:"300"}}> Reminder Name</Title>
     
          <Item regular>
            <Input
            style={{fontWeight:'200', fontSize:14}}
            placeholder='Name of the Reminder'
            value={value1}
            onChangeText={onChangeText1}
            
            />
          </Item>
          <Text></Text>
    
        
      <Title style={{textAlign:"left", fontWeight:'300'}}>Reminder Date</Title>
        <Item regular>
         <Input
         style={{fontWeight:"200", fontSize:14}}
         value={value2}
         onChangeText={onChangeText}
         
         placeholder="YYYY-MM-DD"
         />
         </Item>
         <Text></Text>
   
      <Title style={{textAlign:"left", fontWeight:"300"}}>Reminder Description</Title>
    
          <Form>
            <Textarea style={{fontWeight:"200", fontSize:"15",}} rowSpan={5} bordered placeholder="Please Enter The Description Of Your Reminder" />
          </Form>
          <Text></Text>
  
  
          <Card style={{width:135, alignSelf:"center"}}>
            <CardItem header button style onPress= { buttonPress }>
              <Text style={{textAlign:"center",fontWeight:"200", fontSize:"15"}}> Add Reminder</Text>
            </CardItem>
            
          </Card>
        
      
    </Container>
   
   
  )
 }
  
 export default AddReminder;