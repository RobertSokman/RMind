import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Header, Title } from 'native-base';
import { Icon } from 'native-base';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const ProfileDetails = ({name, country, birthday, sector, language, currency}) => {
  if (name == "Travers Millard" || name == "Dupuis Louis") {
    return (
    
    
      <View style={{alignItems: "center", marginTop: windowHeight/8}}>
          <Icon name="person-circle-outline" style={{fontSize: 160, color: 'green'}} /> 
          <Text style={{fontWeight: "bold" }}>{name}</Text>
          <Text>{country}</Text>
          <Text>Birthday: {birthday}</Text>
          <Text>{sector} sector</Text>
          <Text>Language: {language}</Text>
          <Text>Reporting Currency: {currency}</Text>
      </View>    
      
    )
  } else{
    return (    
      <View style={{alignItems: "center", marginTop: windowHeight/8}}>
          <Icon name="person-circle-outline" style={{fontSize: 160, color: 'gray'}} /> 
          <Text style={{fontWeight: "bold" }}>{name}</Text>
          <Text>{country}</Text>
          <Text>Birthday: {birthday}</Text>
          <Text>{sector} sector</Text>
          <Text>Language: {language}</Text>
          <Text>Reporting Currency: {currency}</Text>
      </View>

    )
  }
  
}

export default ProfileDetails;