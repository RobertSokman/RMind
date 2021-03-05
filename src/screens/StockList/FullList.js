import React from "react";
import { View, Text, FlatList, Dimensions, Pressable } from "react-native";
import securities from "../../../assets/data/securities";
import Security from "../../elements/Security/Security";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {useNavigation} from '@react-navigation/native';
import OneStock from "../OneStock/OneStock";

const FullList = (props) => {
    const navigation = useNavigation();

    return (
        <View>
            <FlatList 
                data={securities}
                renderItem={({item}) => 
                <Pressable onPress={() => navigation.navigate("OneStock")}>
                    <Security security={item}/>
                </Pressable>
                }
                
            />
        </View>
    );
};

export default FullList;