//Exo3_on_the_TextInput_1
import React, { Component ,useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function App() {
  const [text, setText] = useState("");

  const handlePress = () => {
    console.log(text);
    if (text !== "") {
      Alert.alert("Informations",
      text,
      [
        {
          text: "Annuler",
          style: "cancel",
        },
        {
          text: "Ok",
        }
      ],
      {
        cancelable: false,
      });
    }
  };

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Saisissez du texte"
        onChangeText={(value) => setText(value)}
      />
      <View style={styles.buttonView}>
        <Button
          title="Afficher"
          color={"lightgreen"}
          onPress={handlePress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: "grey",
    borderWidth: 2,
    borderStyle: "dashed",
    width: '90%',
    alignSelf: "center",
    marginTop: "5%",
  },

  buttonView: {
    marginTop: "2%",
    width: "50%",
    alignSelf: "center",
  },
});
