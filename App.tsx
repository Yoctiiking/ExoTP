//Exo4_on_the_TextInput_1
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  FlatList,
  TouchableOpacity
} from 'react-native';

export default function App() {

const DATA = [
  { id: '1', name: 'Alice', age: 25, city: 'Paris' },
  { id: '2', name: 'Bob', age: 30, city: 'New York' },
  { id: '3', name: 'Charlie', age: 28, city: 'London' },
  { id: '4', name: 'Diana', age: 22, city: 'Tokyo' },
  { id: '5', name: 'Emma', age: 27, city: 'Berlin' },
  { id: '6', name: 'Frank', age: 29, city: 'Sydney' },
  { id: '7', name: 'Grace', age: 31, city: 'Rio de Janeiro' },
  { id: '8', name: 'Henry', age: 26, city: 'Moscow' },
  { id: '9', name: 'Ivy', age: 24, city: 'Madrid' },
  { id: '10', name: 'Jack', age: 32, city: 'Seoul' },
  { id: '11', name: 'Katherine', age: 23, city: 'Cape Town' },
  { id: '12', name: 'Leo', age: 33, city: 'Toronto' },
  { id: '13', name: 'Mia', age: 28, city: 'Amsterdam' },
  { id: '14', name: 'Noah', age: 27, city: 'Rio de Janeiro' },
  { id: '15', name: 'Olivia', age: 29, city: 'Los Angeles' },
  { id: '16', name: 'Paul', age: 26, city: 'Paris' },
  { id: '17', name: 'Quinn', age: 30, city: 'Barcelona' },
  { id: '18', name: 'Ryan', age: 25, city: 'Sydney' },
  { id: '19', name: 'Sophia', age: 31, city: 'Hong Kong' },
  { id: '20', name: 'Tyler', age: 24, city: 'Berlin' },
];

const handlePress = (item) => {
  Alert.alert(
    "Informations",
    `Id: ${item.id}
Nom: ${item.name}
Age: ${item.age}
Ville: ${item.city}`,[
       {
         title: 'Ok',
         style: 'default',
       }
     ]
  )
}

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => handlePress(item)}>
        <Text style={{textAlign:'center'}}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data = {DATA}
          renderItem = {renderItem}
          keyExtractor = {item => item.id}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: '6%',
    paddingBottom: '1%',
    alignItems: 'center',
  },

  card: {
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: '5%',
    width: '60%',
    padding: 10,
  },
});
