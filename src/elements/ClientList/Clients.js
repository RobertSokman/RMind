import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Pressable} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import { Icon } from 'native-base';

const ClientName = (props) => {
    const client = props.client;
    return (
      <View style={{backgroundColor: "lightgray", height: windowHeight/5, width: windowWidth/2-20, marginLeft: 10}}>
        <Icon name="person-circle-outline" style={{fontSize: 70, color: "gray", textAlign: "center", marginTop: 25}} />   
        <Text style={{textAlign: "center", fontSize: 24, fontWeight: "bold"}}>{client.name}</Text>
          
      </View>
    )
  }
  
export default ClientName;