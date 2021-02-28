import React from 'react';
import { Icon } from 'native-base';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Reminders from "../screens/Reminders/Reminders";
import Template from '../elements/Template';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Screen1 from '../screens/Screen1';
import { color } from 'react-native-reanimated';
import Settings from "../screens/Settings/Settings";
import StockList from "../screens/StockList/StockList";
import ClientList from "../screens/Client list/ClientList";

const Tab = createBottomTabNavigator();


const BottomTabNavigator = (props) => {
    return (
        <Tab.Navigator 
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveBackgroundColor: '#f5f5f5',
                activeBackgroundColor: '#f5f5f5',
                style: { height: 55},
                getLabelText: false,
                initialRouteName: "Home screen",           
            }}>
            <Tab.Screen
                name={"Clients"} 
                component={ClientList}
                options={{
                   
                    tabBarIcon: ({ string }) => (
                        <Icon name="ios-people-outline" size={25} color={'#f15454'} /> 
                    ),
                }} 
            />
            <Tab.Screen
                name={"Stocks"} 
                component={StockList}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ string }) => (
                        <Icon name="ios-bar-chart-outline" size={25} color={'#f15454'}/> 
                    ),
                }} 
            />
            <Tab.Screen
                name={"Home screen"} 
                component={Screen1}
                options={{
                    tabBarIcon: ({ string }) => (
                        <Icon name="home" size={25} color={'#f15454'}/> 
                    ),
                }}
                initialRouteName 
            />
            <Tab.Screen
                name={"Reminders"} 
                component={Reminders}
                options={{
                    tabBarIcon: ({ string }) => (
                        <Icon name="alarm-outline" size={25} color={'#f15454'}/> 
                    ),
                }} 
            />
            <Tab.Screen
                name={"Settings"} 
                component={Settings}
                options={{
                    tabBarIcon: ({ string }) => (
                        <Icon name="settings-outline" size={25} color={'#f15454'}/> 
                    ),
                }} 
            />
        </Tab.Navigator>

    );
};

export default BottomTabNavigator ;