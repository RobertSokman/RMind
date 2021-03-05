import React, { Component, View } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import TabOne from './tabOne';
import TabTwo from './tabTwo';
import TabThree from './tabThree';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="All" >
            <TabOne />
          </Tab>
          <Tab heading="Week">
            <TabTwo />
          </Tab>
          <Tab heading="Today">
            <TabThree />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}