import React, { Component, View } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="All" >
            <Tab1 />
          </Tab>
          <Tab heading="Week">
            <Tab2 />
          </Tab>
          <Tab heading="Today">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}