import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, Dimensions} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Separator } from 'native-base';
import Todaytasks from '../../elements/Homescreen/Todaytasks';
import TaskList from './TaskList';
import { color } from 'react-native-reanimated';
import SegmentedControlTab from 'react-native-segmented-control-tab';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
 
const Screen1 = () => {
  return (
      <Container >
        <ImageBackground
               source={{uri:'https://extensionarchitecture.co.uk/wp-content/uploads/2017/07/Banner-Canary-Wharf.jpg'}}
               style={styles.container}>
        <View style={{flex: 1}}>
          <Header style={{height: 64, backgroundColor: '#003662'}}>
            <Image
              style={styles.logo}
              source={require('../../../assets/Logo5.png')}
            />
          </Header>
          
                   <View style={styles.overlay}>
                   <Text style = {[styles.textStyle, {paddingTop: 10}]}> Welcome Back</Text>
                   <Image source= {{uri:'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-studio-shot-of-modern-hipster-businessman-isolated-on-white-background_HAbEwEn-W_thumb.jpg'}}
                       style={styles.avatarStyle}/>
                   <Text style = {styles.nameTextStyle}> Joe Bloggs </Text>
                   <Text></Text>
                   </View>
                   
           
        
        <SafeAreaView style={{flex: 1,backgroundColor:'rgba(1,0,0,0.5)'}}>
          <TaskList/>
        </SafeAreaView>
        </View>
        </ImageBackground>
      </Container>
  )
}
 
export default Screen1;
 
const styles = StyleSheet.create({
 logo: {
   width: 180,
   height: 80,
   justifyContent: 'center',
   alignSelf: 'center',
   //flex: 'flex-start',
   marginBottom: 10,
 },
 container: {
    height: windowHeight/1,
    width: windowWidth,
 },           
 overlay: {
     backgroundColor:'rgba(1,0,0,0.3)',
     height: windowHeight/3.5
 },
     avatarStyle: {
         width: windowWidth/4,
         height: windowHeight/7,
         borderRadius: 90,
         alignSelf: 'center',
         marginTop: windowHeight/50,
     },
     textStyle: {
         
         fontSize: 20,
         color: "white",
         
         fontWeight: 'bold',
         alignSelf: 'center',
     },
        nameTextStyle:{
          fontSize: 20,
          color: "white",
          fontWeight: 'bold',
          alignSelf: 'center',
          marginTop: windowHeight/50,
     },
     cardTittle:{
           color:"#063970",
           fontSize:22,
           marginBottom:5,
           fontWeight:"300"
         },
     card:{
           backgroundColor:"#CDCDCD",
           borderRadius:1,
           padding:10,
           alignSelf: "center",
           height:100,
           marginTop:10,
           width: 400,
           borderTopColor:"blue",
         },
     balanceContainer:{
         padding:10,
     },
     headerText: {
       padding: 8,
       fontSize: 14,
       color: '#444444',
       textAlign: 'center',
     },
     tabContent: {
       color: '#444444',
       fontSize: 14,
       margin: 24,
     },
     seperator: {
       marginHorizontal: -10,
       alignSelf: 'stretch',
       borderTopWidth: 1,
       borderTopColor: '#888888',
       marginTop: 24,
     },
     tabStyle: {
       borderColor: '#D52C43',
     },
     activeTabStyle: {
       backgroundColor: '#D52C43',
     }
   });