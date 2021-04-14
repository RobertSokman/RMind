import React, { Component} from 'react';
import { Container, Header, Content, List, ListItem, Separator,Icon, Form, Picker,
Radio, Right, Left, Label, Title } from 'native-base';
import { Pressable, View ,  StyleSheet, Text, SafeAreaView, TouchableOpacity, Linking } from 'react-native';
import SignOutButton from './SignOutButton';
 
export default class Settings extends Component {
 
constructor(props) {
super(props);
this.state = {
selected: "key2"
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
<Header style={{height: 44, backgroundColor: '#003662'}}>
<Title style={{ textAlign: "center", marginTop:10, color: 'white'}}>Settings</Title>
</Header>
 
 
<Content>
<Separator bordered>
<Text style={{ marginBottom:-4, fontWeight:"400"}}>USER DETAILS</Text>
</Separator>
<ListItem>
<Text style={{ marginBottom:-4, fontWeight:"400", fontSize:16}}>Relationship Manager Name</Text>
</ListItem>
<ListItem last>
<Text style={{ marginBottom:-4, fontWeight:"400", fontSize:16}}> Relationship Manager ID </Text>
</ListItem>
<Separator bordered>
<Text style={{ marginBottom:-4, fontWeight:"400"}}>SELECT NOTIFIATION FREQUENCY</Text>
</Separator>
 
<Form >
<Picker
mode="dropdown"
iosIcon={<Icon name=""/>}
headerStyle={{ backgroundColor: "#003662", fontWeight:"300"}}
headerBackButtonTextStyle={{ color: "white", fontWeight:"300"}}
headerTitleStyle={{ color: "white", fontWeight:"300"}}
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
<Separator bordered>
<Text style={{ marginBottom:-4, fontWeight:"400"}}>USER OPTIONS</Text>
</Separator>
<ListItem>
<Text style={{ marginBottom:-4, fontWeight:"400", fontSize:16}}> Phone Settings</Text>
</ListItem>
 
<Separator bordered>
<Text style={{ marginBottom:-2, fontWeight:"400", textAlign:"center", color:"#003662"}}> <SignOutButton/> </Text>
</Separator>
 
</Content>
</Container>
);
}
}