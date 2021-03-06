import React, { useEffect, useState } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { Dimensions, View, FlatList } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';
import Reminder from '../Reminder.js/Reminder';
import { API, graphqlOperation } from "aws-amplify";
import { listReminders } from "../../graphql/queries";


const TabThree = (props) => {

    const navigation = useNavigation();
    const [reminders, setReminders] = useState([]);

    var today = new Date();
    var date = today.getDate().toString().padStart(2, '0');
    var month = (today.getMonth() + 1).toString().padStart(2, '0');
    var year = today.getFullYear();
    const date1= year + '-' + month + '-' + date;
    const date2= date + '.' + month + '.' + year;

    //useEffect(() => {
        const fetchClients = async () => {
            try {
                const remindersResult = await API.graphql(
                    graphqlOperation(listReminders, {filter: { dueDate: { eq: date1} }})
                    )
                setReminders(remindersResult.data.listReminders.items);
            } catch (e) {
                console.log(e);
            }
        }
        fetchClients();
    //}, [])

    return (
      <View style={{flex: 1}}>
        <Text style={{height: 25, textAlign: "center", marginTop: 10}}>{date2}</Text>
        <FlatList 
            data={reminders}
            renderItem={({item}) => 
            
            <Reminder reminder={item}/>
            
            }
          
        />
      </View>   
    ) 
  }

  export default TabThree;