# RMind
Exco CLI Quickstart:

to install / update expo: npm install -g expo-cli

to initialise new project: expo init ProjectName

to start server and see project in your phone: npm start

to find icons: https://ionicons.com

to install native-base: npm install native-base --save

NativeBase components: https://docs.nativebase.io/Components.html#Components



Elements to use:

1. BUTTON

<Pressable 
  style={style.button} 
  onPress={() => console.warn('Button was clickes')}
>
  <Text>Text on the Button</Text>
</Pressable>

Styling Buttons:

button: {
  backgroundColor: ,
  width: ,
  height: ,
  borderRadius: , //this command is used to make rounded rectangles
  marginLeft: ,
},

2. SEARCH BUTTON

import Fontisto from "react-native-vector-icons/Fontisto";

<Pressable 
  style={style.searchButton} 
  onPress={() => console.warn('searchButton was clicked')}
>
  <Fontisto name="search" size={25} color{color} /> //this code adds the search icon to the search box
  <Text>Text on the Button</Text>
</Pressable>

Styling Buttons:

searchButton: {
  flexDirection: 'row', //puts items side by side
  borderRadius: , //this command is used to make rounded rectangles
  zIndex: 100, //
  position: 'absolute', 
},
