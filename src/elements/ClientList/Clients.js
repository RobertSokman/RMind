import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Pressable} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ClientName = (props) => {
    const client = props.client;
    return (
      <View >
          
        <Text style={{textAlign: "center", fontSize: 24, fontWeight: "bold", 
            backgroundColor: "lightblue", height: windowHeight/5, width: windowWidth/2-20, marginLeft: 10}}>{client.name}</Text>
          
      </View>
    )
  }
  
export default ClientName;