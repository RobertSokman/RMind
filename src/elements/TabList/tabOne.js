import React, { useEffect, useState } from 'react';
import { Container, Header, Content, List, ListItem, Text, SwipeRow } from 'native-base';
import { Dimensions, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';
import Reminder from '../Reminder.js/Reminder';
import { API, graphqlOperation } from "aws-amplify";
import { listReminders } from "../../graphql/queries";
import { SwipeListView } from 'react-native-swipe-list-view';

const TabOne = (props) => {
    
    const navigation = useNavigation();
    const [reminders, setReminders] = useState([]);

    //useEffect(() => {
        const fetchClients = async () => {
            try {
                const remindersResult = await API.graphql(
                    graphqlOperation(listReminders)
                    )
                setReminders(remindersResult.data.listReminders.items);
            } catch (e) {
                console.log(e);
            }
        }
        fetchClients();
    //}, [])

    return (
        <FlatList 
        data={reminders}
        renderItem={({item}) => 
        
            <Reminder reminder={item}/>
            
        }
      
    />
    ) 
  }

  export default TabOne;
  
  /*
<FlatList 
        data={reminders}
        renderItem={({item}) => 
        
            <Reminder reminder={item}/>
            
        }
      
    />

  */