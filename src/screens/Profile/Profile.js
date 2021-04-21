import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Dimensions, Pressable } from 'react-native';
import { Container, Header, Title, Form, Textarea} from 'native-base';
import { Icon } from 'native-base';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import ProfileDetails from "../../elements/Profile/ProfileDetails";
import PortfolioFullList from "../../elements/Profile/PortfolioFullList";
 
import { ProgressBar, Colors } from 'react-native-paper';

const Profile = ({route}) => {
  const { name, surname, country, birthday, sector, language, currency, customerNo } = route.params;

  const MyComponent = () => (
    <ProgressBar style={{marginTop: 300}}progress={0.5} color={Colors.red800} />
  );
 
  
  return (
    <Container>
      
      <ProfileDetails name = {surname + " " + name } country= {country} birthday={birthday} sector={sector} language={language} 
        currency = {currency}/>
      
      <View style={{marginLeft: windowWidth/14}}>
        <Text style={{fontWeight: "bold"}}>Portfolios: </Text>
      </View>
      <SafeAreaView style={{flex: 0.3}}>
        <PortfolioFullList owner = {customerNo}/>
      </SafeAreaView>


      <Form >
     <Textarea style={{borderWidth:1, borderColor:'#003662', borderRadius:5,fontWeight:"300", 
     fontSize:15, width:windowWidth-10, alignSelf:"center", height: windowHeight/7, marginBottom: windowHeight/22}} 
     rowSpan={5} bordered placeholder= {"Notes about "+ surname + ' ' + name + " ..."} />
     </Form>
    </Container>
    
  )
}

export default Profile;