import {  Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Styles from './styles/Styles.js';

export default function App() {

  return (
    <View style={Styles.container}>
        <Text>Personal information</Text>
        <Text>First Name</Text>
        <TextInput/>
        <Text>Last Name</Text>
        <TextInput />
        <TouchableOpacity onPress={()=>console.log("Submit")}>
          <Text>SUBMIT</Text>
        </TouchableOpacity> 
    </View>
  );
}

