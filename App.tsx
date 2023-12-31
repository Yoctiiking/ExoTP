//Exo3_on_the_TextInput_2

import { View, Text } from 'react-native'
import React, { useState } from 'react'

const ChildComponent = ({name}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default function ParentComponent() {

  const [info, setInfo] = useState("Voici l'info")

  return (
    <View>
      <ChildComponent name = {info} />
    </View>
  )
}
