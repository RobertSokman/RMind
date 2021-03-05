import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Reminder = (props) => {
    const reminder = props.reminder;
    return (
      <View style={{flexDirection: 'row', borderColor: 'lightgray', borderBottomWidth: 0.5}} >
          <Text style={styles.security}>{reminder.name}</Text>
          <Text style={styles.securityPrice}>{reminder.description}</Text>
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
