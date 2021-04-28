import React, { Component} from 'react';
import { Container, Header, Content, List, ListItem, Separator,Icon, Form, Picker, Radio, Right, Left, Label, Title} from 'native-base';
import { Pressable, View ,  StyleSheet, Text, SafeAreaView, TouchableOpacity, Linking, 
  ImageBackground, Image, NativeModules, Platform, TouchableHighlight, Dimensions } from 'react-native';
import SignOutButton from './SignOutButton';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

 
const { RNAndroidOpenSettings } = NativeModules;

export default class Settings extends Component {

openAppSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL("app-settings:");
    } else {
      RNAndroidOpenSettings.appDetailsSettings();
    }
  }
 
constructor(props) {
super(props);
this.state = {
selected: "key1"
};
}
onValueChange(value: string) {
this.setState({
selected: value
});
}
render() {
return (
<Container>
<Header style={{height: 44, backgroundColor: '#003762'}}>
<Title style={{ textAlign: "center", marginTop:10, color:"white"}}>Settings</Title>
</Header>
<Content>
<View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, backgroundColor:"white", height:107, width: windowWidth/2}}>
    <Image source={{uri: 'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-studio-shot-of-modern-hipster-businessman-isolated-on-white-background_HAbEwEn-W_thumb.jpg'}}style={{width:90, height: 90, borderRadius:70,borderWidth:1,borderColor:"white",  marginTop:10, margin:30}} />
    <View>
     <Text style={{fontWeight:"300", marginTop:30, fontSize:30}}>
         Joe Bloggs
     </Text>
     <View>
         <Text style={{fontWeight:"300"}}>
             Email: Joebloggs@credit-suisse.com
         </Text>
     </View>
</View>

    
</View>
<Separator bordered>
<Text style={{ marginBottom:-4, fontWeight:"400"}}>USER DETAILS</Text>
</Separator>
<ListItem>
<Text style={{ fontWeight:"600", fontSize:16}}>Relationship Manager Name:</Text>
<Text style={{ fontWeight:"400", fontSize:16}}> Mr Joe Bloggs</Text>
</ListItem>
<ListItem last>
<Text style={{fontWeight:"600", fontSize:16}}>Relationship Manager ID:</Text>
<Text style={{ fontWeight:"400", fontSize:16}}> 2781</Text>
</ListItem>

<Separator bordered>

<Text style={{ marginBottom:-4, fontWeight:"400"}}>USER OPTIONS</Text>
</Separator>
<ListItem>
<TouchableHighlight onPress={this.openAppSettings}>
          <Text style={styles.buttonText}>App Settings</Text>
        </TouchableHighlight>
</ListItem>


 
<Separator bordered>
<Text style={{ marginBottom:-2, fontWeight:"400", textAlign:"center", color:"#003662"}}> <SignOutButton/> </Text>
</Separator>
 
</Content>
</Container>
);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8,
  },

  button: {
    width: 240,
    height: 44,
    marginTop: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    shadowColor:"white",
    justifyContent: 'center',
  },

  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight:"400"
  },
});

/*
<Separator bordered>
<Text style={{ marginBottom:-4, fontWeight:"400"}}>SELECT NOTIFIATION FREQUENCY</Text>
</Separator>
 
<Form >
<Picker
mode="dropdown"
iosIcon={<Icon name=""/>}
headerStyle={{ backgroundColor: "#003662", fontWeight:"300"}}
headerBackButtonTextStyle={{ color: "white", fontWeight:"300"}}
headerTitleStyle={{ color: "white", fontWeight:"bold"}}
selectedValue={this.state.selected}
onValueChange={this.onValueChange.bind(this)}
>
<Picker.Item label="Hourly" value="key0" />
<Picker.Item label="Daily" value="key1" />
<Picker.Item label="Weekly" value="key2" />
<Picker.Item label="Monthly" value="key3" />
<Picker.Item label="Never" value="key4" />
</Picker>
</Form>

*/