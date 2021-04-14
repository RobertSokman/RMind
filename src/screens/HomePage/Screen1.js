import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Separator } from 'native-base';
import Todaytasks from '../../elements/Homescreen/Todaytasks';
import TaskList from './TaskList';
import { color } from 'react-native-reanimated';
import SegmentedControlTab from 'react-native-segmented-control-tab';
 
const Screen1 = () => {
  return (
      <Container>
        <View>
          <Header style={{height: 64, backgroundColor: '#003662'}}>
            <Image
              style={styles.logo}
              source={require('../../../assets/Logo5.png')}
            />
          </Header>
          <ImageBackground
               source={{uri:'https://extensionarchitecture.co.uk/wp-content/uploads/2017/07/Banner-Canary-Wharf.jpg'}}
               style={styles.container}>
                   <View style={styles.overlay}>
                   <Text style = {[styles.textStyle, {paddingTop: 10}]}> Welcome Back</Text>
                   <Image source= {{uri:'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-studio-shot-of-modern-hipster-businessman-isolated-on-white-background_HAbEwEn-W_thumb.jpg'}}
                       style={styles.avatarStyle}/>
                   <Text style = {styles.textStyle} > Joe Bloggs </Text>
                   <Text></Text>
                   </View>
           </ImageBackground>
        
        <SafeAreaView style={{flex: 1}}>
          <TaskList/>
        </SafeAreaView>
        </View>
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
 
 },           
 overlay: {
     backgroundColor:'rgba(1,0,0,0.2)',
 },
     avatarStyle: {
         width:100,
         height: 100,
         marginTop: 10,
         borderRadius: 50,
         alignSelf: 'center',
     },
     textStyle: {
         marginTop: 10,
         fontSize: 18,
         color: "#FFFFFF",
         fontWeight: '300',
         alignSelf: 'center',
         fontSize: 20,
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