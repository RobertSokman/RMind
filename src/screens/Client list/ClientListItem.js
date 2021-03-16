import React from "react";
import { View, Text, FlatList, Dimensions, Pressable } from "react-native";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {useNavigation} from '@react-navigation/native';
import clients from "../../../assets/data/clients";
import ClientName from "../../elements/ClientList/Clients";


const ClientListItem = (props) => {
    const navigation = useNavigation();

    return (
        <View >
            <FlatList numColumns={2} 
                data={clients}
                renderItem={({item}) => 
                
                <Pressable onPress={() => navigation.navigate("Profile")} 
                           style={{ height: windowHeight/5, marginBottom: 5, width: windowWidth/2}}>
                    <ClientName client={item} />
                </Pressable>
                }
                
            />
        </View>
    );
};

export default ClientListItem;