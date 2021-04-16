import React from 'react';
import { Icon } from 'native-base';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Reminders from "../screens/Reminders/Reminders";
import Fontisto from 'react-native-vector-icons/Fontisto';
import Screen1 from '../screens/HomePage/Screen1';
import { color } from 'react-native-reanimated';
import Settings from "../screens/Settings/Settings";
import StockList from "../screens/StockList/StockList";
import ClientList from "../screens/Client list/ClientList";
const windowHeight = Dimensions.get('window').height;
import { Dimensions} from 'react-native';

const Tab = createBottomTabNavigator();


const BottomTabNavigator = (props) => {
    return (
        <Tab.Navigator 
            tabBarOptions={{
                //activeTintColor: 'blue',
                inactiveBackgroundColor: 'white',
                activeBackgroundColor: 'white',
                style: { height: windowHeight/12},
                getLabelText: false,
                initialRouteName: "Screen1",           
            }}>
            <Tab.Screen
                name={"Clients"} 
                component={ClientList}
                options={{
                   
                    tabBarIcon: ({ string }) => (
                        <Icon name="ios-people-outline" style={{size:25, color:'black'}} /> 
                    ),
                }} 
            />
            <Tab.Screen
                name={"Stocks"} 
                component={StockList}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ string }) => (
                        <Icon name="ios-bar-chart-outline" style={{size:25, color:'black'}}/> 
                    ),
                }} 
            />
            <Tab.Screen
                name={"Home screen"} 
                component={Screen1}
                options={{
                    tabBarIcon: ({ string }) => (
                        <Icon name="home" style={{size:25, color:'black'}}/> 
                    ),
                }}
                initialRouteName 
            />
            <Tab.Screen
                name={"Reminders"} 
                component={Reminders}
                options={{
                    tabBarIcon: ({ string }) => (
                        <Icon name="alarm-outline" style={{size:25, color:'black'}}/> 
                    ),
                }} 
            />
            <Tab.Screen
                name={"Settings"} 
                component={Settings}
                options={{
                    tabBarIcon: ({ string }) => (
                        <Icon name="settings-outline" style={{size:25, color:'black'}}/> 
                    ),
                }} 
            />
        </Tab.Navigator>

    );
};

export default BottomTabNavigator ;