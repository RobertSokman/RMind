import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';



 
const Tasks = () => {
  return (
      <Container>
        <View>
          
         <Text style={{
               marginTop:20,
               marginHorizontal:10,
               color: 'darkblue', 
               fontWeight: 'bold',
          }}> 1. Adam Williams </Text> 
         <Text style={{
               marginTop:10,
               marginHorizontal:30,
               color: 'darkblue', 
          }}> Mortgage </Text> 
 
         <Text style={{
               marginTop:20,
               marginHorizontal:10,
               color: 'darkblue', 
               fontWeight: 'bold',
          }}> 2. Sara Johnson </Text> 
               <Text style={{
               marginTop:10,
               marginHorizontal:30,
               color: 'darkblue', 
          }}> Stocks </Text> 
 
         <Text style={{
               marginTop:20,
               marginHorizontal:10,
               color: 'darkblue', 
               fontWeight: 'bold',
          }}> 3. Phil Johnson  </Text> 
          
          <Text style={{
               marginTop:10,
               marginHorizontal:30,
               color: 'darkblue', 
          }}> Meeting </Text> 
                       <Text style={{
               marginTop:20,
               marginHorizontal:10,
               color: 'darkblue', 
               fontWeight: 'bold',
          }}> 4. Anna Brown  </Text> 
           <Text style={{
               marginTop:10,
               marginHorizontal:30,
               color: 'darkblue', 
          }}> Investment </Text> 
          
       
        </View>
      </Container>
  )
}
 
export default Tasks;