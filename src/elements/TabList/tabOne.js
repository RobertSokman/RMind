import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Tab1 extends Component {
  render() {
    return (
    <Container >
        
        <Content>
          <List style={{width: windowWidth}}>
            <ListItem itemDivider>
              <Text>Sun 28. Feb</Text>
            </ListItem>                    
            <ListItem>
              <Text>Aaron Bennet mortgage payment</Text>
            </ListItem>
            <ListItem>
              <Text>Ali Connors mortgage payment</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Monday 1. March</Text>
            </ListItem>  
            <ListItem>
              <Text>Bradley Horowitz mortgage payment</Text>
            </ListItem>
            <ListItem>
              <Text>Bradley Horowitz mortgage payment</Text>
            </ListItem>
            <ListItem>
              <Text>Bradley Horowitz mortgage payment</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Tuesday 2. March</Text>
            </ListItem>  
            <ListItem>
              <Text>Bradley Horowitz mortgage payment</Text>
            </ListItem>
            <ListItem>
              <Text>Bradley Horowitz mortgage payment</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Tuesday 2. March</Text>
            </ListItem>  
            <ListItem>
              <Text>Bradley Horowitz mortgage payment</Text>
            </ListItem>
            <ListItem>
              <Text>Bradley Horowitz mortgage payment</Text>
            </ListItem>
          </List>
        </Content>
    </Container>
    );
  }
}