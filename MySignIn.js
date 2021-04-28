import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TextInput, Dimensions, ImageBackground, Pressable } from 'react-native';
import 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { Auth } from 'aws-amplify';
import Amplify, { signInButton } from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

import { withAuthenticator } from 'aws-amplify-react-native'
import { AmplifyTheme } from './src/screens/AmplifyTheme/index'
import { Container } from 'aws-amplify-react-native/dist/AmplifyUI';
import { useEffect } from 'react/cjs/react.development';


    const MySignIn = (props) => {
    
      const [userN, setUserN] = useState('');  
      const [code, setCode] = useState('');  
  
      const lala = async function signIn() {      
        try { 
            const user = await Auth.signIn(userN, code);
        } catch (error) {
            console.log('error signing in', error);
        }
      }

      
      
      return(
        
        <Container>
          <View>
            <ImageBackground source={require('./assets/skyline.jpeg')} style={{width: windowWidth, height: windowHeight+20}}>
              
              <Image
                style={{width: windowWidth/1.6, height: windowHeight/12, marginTop: windowHeight/10, alignSelf: 'center'}}
                source={require('./assets/Logo.png')}
              />
              <Image
                style={{width: windowWidth/1.6, height: windowHeight/12,  alignSelf: 'center', marginRight: windowWidth/10}}
                source={require('./assets/Rmind2.png')}
              />
              
              
                           
              <View style={{marginTop: windowHeight/3.5}}>
              <View style={styles.inputView}>
              <TextInput  
                style={styles.inputText}
                placeholder="Username" 
                placeholderTextColor="#003f5c"
                value={userN}
                onChangeText={setUserN}
                
                />
              </View>
              <View style={styles.inputView} >
              <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Password" 
                placeholderTextColor="#003f5c"
                value={code}
                onChangeText={setCode}
                
                />
              </View>
              <Pressable onPress = { lala } 
              style={styles.loginBtn}>
                <Text style={{color: "white", textAlign:"center"}}>Sign in</Text>
              </Pressable>
              </View>
              
            </ImageBackground>
          </View>
        </Container>
      )}
  
      export default MySignIn;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#465881",
      marginBottom:650
    },
    inputView:{
      width:"80%",
      backgroundColor:'lightblue',
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      alignSelf: 'center',
      padding:20,
      
    },
    inputText:{
      height:50,
      color:"black",
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      width: windowWidth/2.5,
      alignSelf: 'center',
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
    },
    loginText:{
      color:"white"
    }
  });
  

  /*
              <Image
                style={{width: windowWidth/1.6, height: windowHeight/12, marginTop: windowHeight/8, alignSelf: 'center'}}
                source={require('./assets/Logo.png')}
              />
              <Image
                style={{width: windowWidth/2.75, height: windowHeight/5,  alignSelf: 'center', marginTop: windowHeight/15}}
                source={require('./assets/RMind.png')}
              />

  */