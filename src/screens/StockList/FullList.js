import React from "react";
import { View, Text, FlatList } from "react-native";
import securities from "../../../assets/data/securities";
import Security from "../../elements/Security/Security";

const FullList = (props) => {
    return (
        <View>
            <FlatList 
                data={securities}
                renderItem={({item}) => <Security security={item} />}
            />
        </View>
    );
};

export default FullList;