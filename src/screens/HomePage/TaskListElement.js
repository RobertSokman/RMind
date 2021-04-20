import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const TaskListElement = (props) => {
    const reminder = props.reminder;
    return (
      <View >
          <Text style={styles.security}>{reminder.description}</Text>  
      </View>
    )
  }
  
export default TaskListElement;

const styles = StyleSheet.create({

  security: {
    fontSize: 16,
    flex: 2,
    marginBottom:15,
    marginLeft: 10,
    marginTop: 15
  },
  
});
