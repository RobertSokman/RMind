import React, { Component} from 'react';
import { Container, Header, Content, List, ListItem, Text, Separator,Icon, Form, Picker,
 Radio, Right, Left, Label, Title } from 'native-base';
import { Pressable, View } from 'react-native';


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
 <Header style={{height: 44, backgroundColor: 'white'}}>
 <Title style={{ textAlign: "center", marginTop:10}}>Settings</Title>
 </Header>
 <Content>
 <Separator bordered>
 <Text>USER DETAILS</Text>
 </Separator>
 <ListItem>
 <Text>Relationship Manager Name</Text>
 </ListItem>
 <ListItem last>
 <Text> Relationship Manager ID </Text>
 </ListItem>
 <Separator bordered>
 <Text style={{fontSize:13, textAlign:"left", height:15}}>NOTIFICATION SETTINGS: (select to change frequency)</Text>
 
 </Separator>
 
 <Form >
 <Picker
 mode="dropdown"
 iosIcon={<Icon name=""/>}
 headerStyle={{ backgroundColor: "white" }}
 headerBackButtonTextStyle={{ color: "#0000800" }}
 headerTitleStyle={{ color: "#0000800"}}
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
 <Text>Others</Text>
 </Separator>

 <ListItem last>
 <Pressable onPress={() => console.warn('Signed out')}>
    <Text>Sign out</Text>
 </Pressable>
 </ListItem>
 

 
 </Content>
 </Container>
 );
 }
}
