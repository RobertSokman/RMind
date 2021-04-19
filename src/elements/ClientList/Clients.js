import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Pressable} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import { Icon } from 'native-base';

const ClientName = (props) => {
    const client = props.client;
    return (
      <View style={{marginLeft: 10, flexDirection: "row", alignItems: 'center', height: windowHeight/10}}>
         
        <Text style={{textAlign: "center", fontSize: 18, fontWeight: "bold"}}>{client.name} {client.surname}</Text>
      </View>
    )
  }
  
export default ClientName;

/*
<Icon name="person-circle-outline" style={{fontSize: 50, color: "lightblue", textAlign: "center"}} />  
*/