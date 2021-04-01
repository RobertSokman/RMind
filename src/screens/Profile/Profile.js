import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Header, Title } from 'native-base';
import { Icon } from 'native-base';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import ProfileDetails from "../../elements/Profile/ProfileDetails";
import PortfolioFullList from "../../elements/Profile/PortfolioFullList";

const Profile = ({route}) => {
  const { name, surname, country, birthday, sector, language, currency, customerNo } = route.params;
  
  return (
    <Container>
      
      <ProfileDetails name = {name + " " + surname } country= {country} birthday={birthday} sector={sector} language={language} 
        currency = {currency}/>
      
      <View style={{marginTop: windowHeight/14, marginLeft: windowWidth/14}}>
        <Text style={{fontWeight: "bold"}}>Portfolios: </Text>
      </View>
      <SafeAreaView style={{flex: 1}}>
        <PortfolioFullList owner = {customerNo}/>
      </SafeAreaView>
    </Container>
    
  )
}

export default Profile;