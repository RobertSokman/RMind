import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Pressable} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Clients = (props) => {
    //const security = props.security;
    return (
      <View  >
          <Pressable 
            style={{flexDirection: 'row', width: windowWidth/3, backgroundColor: "gray", 
                    height: windowHeight/4, alignItems: "center", marginLeft: 5, borderRadius: 50}}
          >
              <Text style={{textAlign: "center", color: "white", fontSize: 14, fontWeight: "bold"}}>Client Name</Text>
          </Pressable>

          <Pressable 
            style={{flexDirection: 'row', width: windowWidth/3, backgroundColor: "gray", 
                    height: windowHeight/4, alignItems: "center", marginTop: 5, marginLeft: 5, borderRadius: 50}}
          >
              <Text style={{textAlign: "center", color: "white", fontSize: 14, fontWeight: "bold"}}>Client Name</Text>
          </Pressable>
      </View>
    )
  }
  
export default Clients;