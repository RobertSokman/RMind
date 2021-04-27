import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Dimensions, Pressable, RefreshControl } from "react-native";
import Security from "../../elements/Security/Security";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {useNavigation} from '@react-navigation/native';
import OneStock from "../OneStock/OneStock";
import { Icon, Item } from "native-base";
import { API, graphqlOperation } from "aws-amplify";
import { listSecuritys } from "../../graphql/queries";
import { TextInput } from "react-native";
import { PureComponent } from "react/cjs/react.development";

const FullList  = (props) => {
    
    
    
    const navigation = useNavigation();

  
    const [securities, setSecurities] = useState([]);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        
            const fetchClients1 = 
            async () => {
                try {
                    const securitiesResult = await API.graphql(
                        graphqlOperation(listSecuritys, { limit: 300} )
                        )
                    setSecurities(securitiesResult.data.listSecuritys.items);
                } catch (e) {
                    console.log(e);
                }
            }
            fetchClients1();
       
    }
    ,[])
        
    const fetchClients = async () => {
            try {
                const securitiesResult = await API.graphql(
                    graphqlOperation(listSecuritys, {filter: { company: { contains: inputText }}}, { limit: 300})
                    )
                setSecurities(securitiesResult.data.listSecuritys.items);
            } catch (e) {
                console.log(e);
            }
        }
    
        fetchClients();//}
    

    return (
        <View>

            <TextInput
            placeholder="search"
            value={inputText}
            onChangeText={setInputText}
            onChange={fetchClients}
            style={{color: 'black', width: windowWidth/1.2, backgroundColor: 'lightgray', height: windowHeight/18, 
                        borderRadius: 20, alignSelf: 'center', textAlign: 'center'}}
            />
            
            <FlatList 
                style={{flex: 0}}
                data={securities}
                //extraData={this.state.refresh}
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