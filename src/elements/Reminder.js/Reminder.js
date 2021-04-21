import React, { useEffect, useState } from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Pressable} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import { deleteReminder } from '../../graphql/mutations';
import { API, Auth, graphqlOperation } from 'aws-amplify';

import MaterialIcons from "react-native-vector-icons/MaterialIcons";


const Reminder = (props) => {
    const reminder = props.reminder;

    /*const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const fetchReminders= async () => {
      try {
        const remindersResult = await API.graphql(graphqlOperation
          (deleteReminder, {input: {description: reminder.description}})
        )
          setReminders(remindersResult.data.deleteReminder.items);
        }                                
        catch (e) {
        console.log(e);
        }
      }
      fetchReminders();
    }, [])*/
    const lalala = reminder.description;
    const deleteDescription = async () => {
      try {
        await API.graphql(graphqlOperation
          (deleteReminder, {input: {description: {eq: lalala}}}))
        }                                
        catch (e) {
        console.log(e);
        }
      }

    return (
      <View style={{flexDirection: 'row', borderColor: 'lightgray', borderBottomWidth: 0.5}} >
          <Text style={styles.security}>{reminder.description}</Text>
          
      </View>
    )
  }
  
export default Reminder;

const styles = StyleSheet.create({

  security: {
    fontSize: 16,
    //justifyContent: 'center',
    flex: 2,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 10,
  },
  securityPrice: {
    fontSize: 16,
    //justifyContent: 'center',
    textAlign: 'right',
    flex: 3,
    marginRight: 15,
    marginTop: 20,
  },

});
