//Exo3_on_the_TextInput_4
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
      placeholder: "Nom d'utilisateur",
      value: '',
      type: 'email-address',
      security: false
    },
    {
      placeholder: 'Mot de passe',
      value: '',
      type: 'default',
      security: true
    },
  ]);

  const updateIdentifiants = (value, index) => {
    const stageId = [...identifiants];
    stageId[index].value = value;
    setIndentifiants(stageId);
  };

  const handlePress = () => {
    let valide = false;
    let nbAro = 0;

    for (let i = 0; i < identifiants[0].value.length; i++) {
      if (identifiants[0].value[i] === '@') {
        nbAro++;
      }
    }

    valide = nbAro === 1; // Valide si un seul "@" est trouvé

    if (valide) {
      if (identifiants[1].value.length >= 8) {
        console.log(identifiants.map((item) => item.value));
        Alert.alert(
          'Login ID',
          `Username: ${identifiants[0].value}\nPassword: ${identifiants[1].value}`,
          [
            {
              text: 'Ok',
              style: 'default',
            },
          ]
        );
      } else {
        ToastAndroid.show(
          'Your password must have at least 8 characters',
          ToastAndroid.LONG
        );
      }
    } else {
      ToastAndroid.show('Enter a valid email address', ToastAndroid.LONG);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ fontSize: 50, textAlign: 'center', fontWeight: 'bold', color: "white" }}>
          LOGIN
        </Text>
        {identifiants.map((value, index) => (
          <TextInput
            style={styles.textInput}
            key={index}
            keyboardType={value.type}
            secureTextEntry = {value.security}
            value={value.value}
            placeholder={value.placeholder}
            placeholderTextColor="grey"
            onChangeText={(val) => updateIdentifiants(val, index)}
          />
        ))}
        <View style={styles.buttonView}>
          <Button title="Connect" onPress={handlePress} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    paddingTop: '10%',
  },
  textInput: {
    textAlign: 'center',
    borderBottomColor: 'white',
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: '5%',
    width: '80%',
    color: "white",
  },

  buttonView: {
    marginTop: 20,
    alignSelf: 'center',
  },
});
