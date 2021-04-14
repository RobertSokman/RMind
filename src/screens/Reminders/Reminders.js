import React from "react";
import { View, Text, StyleSheet,} from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Title, Icon , Header} from "native-base";
import TabsExample from "../../elements/TabList/ListReminders";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {useNavigation} from '@react-navigation/native';

const Reminders = () => {
  const navigation = useNavigation();
  return (
    <Container >
      <Header style={{height: 44, backgroundColor: '#003662'}}>
        <Title style={{ textAlign: "center", marginTop:10, color:'white'}}>Reminders</Title>
        <Icon name="add" size={25} color={'#f15454'} style={{marginTop: 5, color:'white'}} onPress={() => navigation.navigate("Add Reminder")}/>
      </Header>
      <TabsExample /> 
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