import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Header, Title } from 'native-base';
import { Icon } from 'native-base';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const ProfileDetails = ({name, country, birthday, sector, language, currency}) => {
  if (name == "Millard Travers" || name == "Louis Dupuis") {
    return (
    <Container style={{marginTop: windowHeight/15}}>
      <View style={{alignSelf: 'center', }}>
        <Icon name="person-circle-outline" style={{fontSize: 160, color: 'green'}}  /> 
      </View>
      <View style={{alignItems: "center", backgroundColor: "lightgray", borderRadius: 20, width: windowWidth/1.5, 
      alignSelf: "center"}}>
          
          <Text style={{fontWeight: "bold", marginTop: 10, fontSize: 18  }}>{name}</Text>
          <Text style={{fontSize: 16}}>{country}</Text>
          <Text style={{fontSize: 16}}>Birthday: {birthday}</Text>
          <Text style={{fontSize: 16}}>{sector} sector</Text>
          <Text style={{fontSize: 16}}>Language: {language}</Text>
          <Text style={{marginBottom: 10, fontSize: 16}}>Reporting Currency: {currency}</Text>
      </View>    
    </Container> 
    )
  } else{
    return (    

      <Container style={{marginTop: windowHeight/15}}>
      
      <View style={{alignSelf: 'center'}}>
        <Icon name="person-circle-outline" style={{fontSize: 160, color: '#F3D77F'}} /> 
      </View>
      <View style={{alignItems: "center", 
                      backgroundColor: "lightgray", borderRadius: 20, width: windowWidth/1.5, alignSelf: "center"}}>
          
          <Text style={{fontWeight: "bold", marginTop: 10, fontSize: 18 }}>{name}</Text>
          <Text style={{fontSize: 16}}>{country}</Text>
          <Text style={{fontSize: 16}}>Birthday: {birthday}</Text>
          <Text style={{fontSize: 16}}>{sector} sector</Text>
          <Text style={{fontSize: 16}}>Language: {language}</Text>
          <Text style={{marginBottom: 10, fontSize: 16}}>Reporting Currency: {currency}</Text>
      </View>
      </Container>
    )
  }
  
}

export default ProfileDetails;