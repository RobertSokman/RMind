import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Header, Title } from 'native-base';


const Settings = () => {
  return (
    <View>
      <Header style={{height: 44, backgroundColor: 'white'}}>
        <Title style={{ textAlign: "center", marginTop:10}}>Settings</Title>
      </Header>
      
    </View>
  )
}

export default Settings;
