import { Container } from 'native-base';
import React from 'react';
import { TextInput, Dimensions, View, Text} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const TaskDescription = () => {
  const [value, onChangeText] = React.useState('Description');

  return (
    <Container>
    <View style={{marginTop: 20}}>
        
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 12, width: windowWidth-40, alignSelf: "center", marginTop: 5 }}
        onChangeText={text => onChangeText(text)}
        value={value}
        />

    </View>
    
    </Container>
  );
}

export default TaskDescription;