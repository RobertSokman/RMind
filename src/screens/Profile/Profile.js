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

  const [notes, setNotes] = useState('');  
  const [inputText, setInputText] = useState('');

  useEffect(() => {
        
    const fetchClients1 = 
    async () => {
        try {
            const notesResult = await API.graphql(
                graphqlOperation(listNotes)
                )
            setNotes(notesResult.data.listNotes.items);
        } catch (e) {
            console.log(e);
        }
    }
    fetchClients1();

}
,[])

  
  
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
     rowSpan={5} bordered placeholder= {"Notes about "+ surname + ' ' + name + " ..."} 
     //value={notes}
     value={inputText}
     onChangeText={setInputText}
     //onChangeText={setNotes}
     />
     </Form>
    </Container>
    
  )
}

export default Profile;