//Exo3_on_the_TextInput_3
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';

export default function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  return (
    <View style = {styles.container}>
      <TextInput style={styles.textInput}
        onChangeText={(text) => setText1(text)}
        value={text1}
        placeholder="Text 1"
      />
      <Text style={{fontSize: 20}}>You typed: {text1}</Text>

      <TextInput style={styles.textInput}
        onChangeText={(text) => setText2(text)}
        value={text2}
        placeholder="Text 2"
      />
      <Text style={{fontSize: 20}}>You typed: {text2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'plum',
    flex: 1,
  },
  textInput: {
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: '10%',
    width: '80%',
  },
});
