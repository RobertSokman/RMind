import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Header, Title, Form, Textarea} from 'native-base';
import { Icon } from 'native-base';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import ProfileDetails from "../../elements/Profile/ProfileDetails";
import PortfolioFullList from "../../elements/Profile/PortfolioFullList";
import { API, graphqlOperation } from "aws-amplify";
 
import { listNotes } from "../../graphql/queries";


const Profile = ({route}) => {
  const { name, surname, country, birthday, sector, language, currency, customerNo } = route.params;
  return (
    <Container>
      
      <ProfileDetails name = {surname + " " + name } country= {country} birthday={birthday} sector={sector} language={language} 
        currency = {currency}
        />
      
      <View style={{marginLeft: windowWidth/14, marginTop: windowHeight/5}}>
        <Text style={{fontWeight: "bold"}}>Portfolios: </Text>
      </View>
      <SafeAreaView style={{flex: 1}}>
        <PortfolioFullList owner = {customerNo}/>
      </SafeAreaView>
      

      
    </Container>
    
  )
}

export default Profile;