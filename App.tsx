//Exo3_on_the_TextInput_5
import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  ToastAndroid,
} from 'react-native';

export default function App() {

  const [identifiants, setIndentifiants] = useState([
      {
        placeholder: 'Nom d\'utilisateur',
        value:"",
        },
      {
        placeholder: 'Mot de passe',
        value: "",
      }
    ]);

  const updateIdentifiants = (value, index) => {
    const stageId = [...identifiants];
    stageId[index].value = value;
    setIndentifiants(stageId);
  }

  const handlePress = () => {
    console.log(identifiants.map(item => item.value));
    if(identifiants[0].value !== ''){
      Alert.alert('Login ID',
      `Username: ${identifiants[0].value}\nPassword: ${identifiants[1].value}`,
      [{
        text: 'Ok',
        style: 'default',
      }]);
    } else {
      ToastAndroid.show("Enter your username", 3);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style = {{fontSize: 50, textAlign: 'center', fontWeight: 'bold'}}>LOGIN</Text>
        {identifiants.map( (value, index) => (
          <TextInput style={styles.textInput}
            key = {index}
            value = {value.value}
            placeholder = {value.placeholder}
            onChangeText = {(val) => updateIdentifiants(val, index)}
           />
        ))}
        <View style={styles.buttonView}>
          <Button 
            title = "Connect"
            onPress = {handlePress}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'plum',
    flex: 1,
    paddingTop: "10%",
  },
  textInput: {
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: '5%',
    width: '80%',
  },

  buttonView: {
    marginTop: 20,
    alignSelf: 'center',
  },
});
