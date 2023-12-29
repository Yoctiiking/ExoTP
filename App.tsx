import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Counter() {

  const [count, setCount]= useState(660);

  const increment = () => {
    setCount(count+1);
  }

  const decrement = () => {
    setCount(count-1);
  }

  return(
    <View style = {styles.mainView}>

        <View style = {styles.buttonView}>
          <Button title="Increment" color={'green'} onPress={increment} touchSoundDisabled />
          <Button title="Decrement" color={'red'} onPress={decrement} touchSoundDisabled/>
        </View>

        <View style = {styles.countView}>
          <Text style = {{fontSize: 95,}}>{count}</Text>
        </View>

    </View>
  )
}

const styles = StyleSheet.create(
  {
    mainView: {
      flex: 1,
      backgroundColor: 'darkblue',
    },

    buttonView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },

    countView:{
      flex: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    }
  }
)