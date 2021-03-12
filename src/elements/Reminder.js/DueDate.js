import { Container } from 'native-base';
import React from 'react';
import { TextInput, Dimensions, View, Text} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const DueDate = () => {
  const [value, onChangeText] = React.useState('Due date (dd/mm/yyyy)');

  return (
    <Container>
    <View style={{marginTop: 80}}>
        
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 12, width: windowWidth-40, alignSelf: "center", marginTop: 5 }}
        onChangeText={text => onChangeText(text)}
        value={value}
        />

    </View>
    
    </Container>
  );
}

export default DueDate;