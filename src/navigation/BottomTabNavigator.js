import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Reminders from "../screens/Reminders/Reminders";
import Template from '../elements/Template';

const Tab = createBottomTabNavigator();



const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"Reminders"} component={Reminders} />
        </Tab.Navigator>

    );
};

export default BottomTabNavigator ;