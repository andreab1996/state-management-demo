

import React from 'react';
import { TextInput, View } from 'react-native';


export default function App() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  function setNames(text) {
    text = text || "";
    let [first, last] = text.split(" ");
    console.log('--------------', first, last)
    setFirstName(first);
    setLastName(last);
  }
  return (
    <View style={{ 
      margin: 10,
      flex: 1
    }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        label='First name'
        onChangeText={text => setFirstName(text)}
        value={firstName}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        label='Last name'
        onChangeText={text => setLastName(text)}
        value={lastName}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        label='Full name'
        onChangeText={text => setNames(text)}
        value={`${firstName} ${lastName}`}
      />
    </View>
  )
}