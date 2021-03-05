import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { Dimensions, View, FlatList } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';
import reminders from '../../../assets/data/reminders';
import Reminder from '../Reminder.js/Reminder';

const TabTwo = (props) => {
  
    const navigation = useNavigation();
    return (
      <View>
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