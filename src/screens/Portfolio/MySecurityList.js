import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Dimensions, Pressable } from "react-native";
import Security from "../../elements/Security/Security";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {useNavigation} from '@react-navigation/native';
import OneStock from "../OneStock/OneStock";
import { Item } from "native-base";
import { API, graphqlOperation } from "aws-amplify";
import { listMySecuritys } from "../../graphql/queries";
import MySecurityListElement from "./MySecurityListElement";

const MySecurityList = ( {parentPortfolio}) => {
    const navigation = useNavigation();
    
    const [securities, setSecurities] = useState([]);
    const parentPortfolioNo = parentPortfolio;

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const securitiesResult = await API.graphql(
                    graphqlOperation(listMySecuritys, {filter: { portfolioNo: { eq: parentPortfolioNo } }})
                    )
                setSecurities(securitiesResult.data.listMySecuritys.items);
            } catch (e) {
                console.log(e);
            }
        }
        fetchClients();
    }, [])
    return (
        <View>
            <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 10, backgroundColor: '#003662', 
            height: windowHeight/22, color: 'white', alignContent:'center'}}>List of securities in this portfolio:</Text>
            <FlatList 
                data={securities}
                renderItem={({item}) => 
                <Text style={{marginBottom: 25}}>
                    <MySecurityListElement security={item}/>
                </Text>
                }
                
            />
        </View>
    );
};

export default MySecurityList;