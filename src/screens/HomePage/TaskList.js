import React, { useEffect, useState } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left } from 'native-base';
import { Dimensions, View, FlatList, SafeAreaView } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';
import { API, graphqlOperation } from "aws-amplify";
import { listReminders } from "../../graphql/queries";
import TaskListElement from "./TaskListElement";
import tasks from "../../../assets/data/tasks";

const TaskList = (props) => {

    const navigation = useNavigation();
    const [reminders, setReminders] = useState([]);

    var today = new Date();
    var date = today.getDate().toString().padStart(2, '0');
    var month = (today.getMonth() + 1).toString().padStart(2, '0');
    var year = today.getFullYear();
    const date1= year + '-' + month + '-' + date;
    const date2= date + '.' + month + '.' + year;

    useEffect(() => {
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
    }, [])

    return (
      <View style={{flex: 1, backgroundColor: 'rgba(1,0,0,0.5)', borderRadius: 30, width: windowWidth-10, alignSelf: 'center'}}>
        
        <Text style={{height: 25, textAlign: "center", marginTop: 10, fontWeight:'bold', color: 'white', 
                        fontSize: 18, marginBottom: 10, textAlign: 'left', marginLeft:windowWidth/22}}>YOUR TASKS:</Text>
        <FlatList 
            style={{ borderRadius: 5, width: windowWidth/1.05, flexGrow: 0, alignSelf: 'center'}}
            data={reminders}
            renderItem={({item}) => 
            
            <TaskListElement reminder={item}/>
            
            }
          
        />

        <Text style={{height: 25, textAlign: 'right', marginRight: 15, marginTop: windowHeight/4, color: 'white'}}>Today is {date2}</Text>      
        
      </View>   
    ) 
  }

  export default TaskList;