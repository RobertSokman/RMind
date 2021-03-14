import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Pressable} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ClientName = (props) => {
    const client = props.client;
    return (
      <View  >
          
        <Text style={{textAlign: "center", fontSize: 24, fontWeight: "bold", 
            backgroundColor: "lightgray", width: windowWidth/2, height: windowHeight/7, marginBottom: 5}}>{client.name}</Text>
          
      </View>
    )
  }
  
export default ClientName;