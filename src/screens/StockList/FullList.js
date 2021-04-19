import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Dimensions, Pressable } from "react-native";
import Security from "../../elements/Security/Security";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {useNavigation} from '@react-navigation/native';
import OneStock from "../OneStock/OneStock";
import { Item } from "native-base";
import { API, graphqlOperation } from "aws-amplify";
import { listSecuritys } from "../../graphql/queries";
import { TextInput } from "react-native";

const FullList = (props) => {
    const navigation = useNavigation();
    
    const [securities, setSecurities] = useState([]);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        if (inputText == '')
        {
            const fetchClients = async () => {
                try {
                    const securitiesResult = await API.graphql(
                        graphqlOperation(listSecuritys, { limit: 1000} )
                        )
                    setSecurities(securitiesResult.data.listSecuritys.items);
                } catch (e) {
                    console.log(e);
                }
            }
            fetchClients();
        }
        
        else
        {
        const fetchClients = async () => {
            try {
                const securitiesResult = await API.graphql(
                    graphqlOperation(listSecuritys, {filter: { company: { contains: inputText }}}, { limit: 1000} )
                    )
                setSecurities(securitiesResult.data.listSecuritys.items);
            } catch (e) {
                console.log(e);
            }
        }
    
        fetchClients();}
    },[])
    return (
        <View>

            <TextInput
            placeholder="Type Here..."
            value={inputText}
            onChangeText={setInputText}
            style={{color: 'black'}}
            />
            <FlatList 
                data={securities}
                renderItem={({item}) => 
                <Pressable onPress={() => navigation.navigate("Security", {name: item.company, code: item.securityCode, currency: item.currency, 
                    price1: item.price1, price2: item.price2, price3: item.price3, price4: item.price4, price5: item.price5, date1: item.priceOneDate,
                    date2: item.priceTwoDate, date3: item.priceThreeDate, date4: item.priceFourDate, date5: item.priceFiveDate})}>
                    <Security security={item}/>
                </Pressable>
                }
                
            />
        </View>
    );
};

export default FullList;