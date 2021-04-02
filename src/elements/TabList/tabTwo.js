import React, { useEffect, useState } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { Dimensions, View, FlatList } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';
import Reminder from '../Reminder.js/Reminder';
import { API, graphqlOperation } from "aws-amplify";
import { listReminders } from "../../graphql/queries";

const TabTwo = (props) => {
  
    const navigation = useNavigation();
    const [reminders, setReminders] = useState([]);

    useEffect(() => {
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
    }, [])

    return (
      <View style={{flex: 1}}>
        <FlatList 
            data={reminders}
            renderItem={({item}) => 
            
            <Reminder reminder={item}/>
            
            }
          
        />
      </View>   
    ) 
  }

  export default TabTwo;