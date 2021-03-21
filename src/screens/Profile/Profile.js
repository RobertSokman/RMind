import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Header, Title } from 'native-base';
import { Icon } from 'native-base';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import ProfileDetails from "../../elements/Profile/ProfileDetails";
import PortfolioFullList from "../../elements/Profile/PortfolioFullList";


const Profile = () => {
  return (
    <Container>
      
      <ProfileDetails name = "David Jones" country= "Switzerland" birthday="15.10.1959" sector="Private" language="English, French" 
        address="25 Imperial Rd, Windsor, SL4 3RU" currency = "EUR"/>
      
      <View style={{marginTop: windowHeight/14, marginLeft: windowWidth/14}}>
        <Text style={{fontWeight: "bold"}}>Portfolios:</Text>
      </View>
      <SafeAreaView style={{flex: 1}}>
        <PortfolioFullList />
      </SafeAreaView>
    </Container>
    
  )
}

export default Profile;