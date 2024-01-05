//Exo4_on_the_FlatList_4
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

export default function App() {
  const dataEntered = [
    { id: "1", name: "Alice", age: 25, city: "Paris" },
    { id: "2", name: "Bob", age: 30, city: "New York" },
    { id: "3", name: "Charlie", age: 28, city: "London" },
    { id: "4", name: "Diana", age: 22, city: "Tokyo" },
    { id: "5", name: "Emma", age: 27, city: "Berlin" },
    { id: "6", name: "Frank", age: 29, city: "Sydney" },
    { id: "7", name: "Grace", age: 31, city: "Rio de Janeiro" },
    { id: "8", name: "Henry", age: 26, city: "Moscow" },
    { id: "9", name: "Ivy", age: 24, city: "Madrid" },
    { id: "10", name: "Jack", age: 32, city: "Seoul" },
    { id: "11", name: "Katherine", age: 23, city: "Cape Town" },
    { id: "12", name: "Leo", age: 33, city: "Toronto" },
    { id: "13", name: "Mia", age: 28, city: "Amsterdam" },
    { id: "14", name: "Noah", age: 27, city: "Rio de Janeiro" },
    { id: "15", name: "Olivia", age: 29, city: "Los Angeles" },
    { id: "16", name: "Paul", age: 26, city: "Paris" },
    { id: "17", name: "Quinn", age: 30, city: "Barcelona" },
    { id: "18", name: "Ryan", age: 25, city: "Sydney" },
    { id: "19", name: "Sophia", age: 31, city: "Hong Kong" },
    { id: "20", name: "Tyler", age: 24, city: "Berlin" },
  ];

  const [dataUpdated, setDataUpdated] = useState(
    dataEntered.map( (data) => ({...data, isFavorite: false}))
  );

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = (itemId) => {
    setDataUpdated( prevState => prevState.map( item =>{ 
    if(item.id === itemId) 
    {
      const updatedItem = {...item, isFavorite:!item.isFavorite};
      return updatedItem;
    };
    return item;}
    ))
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        const newData = dataEntered.slice(data.length, data.length + 5);
        setData([...data, ...newData]);
        setIsLoading(false);
      }, 1500);
    } catch (error){
      setIsLoading(false);
      console.log("Error")
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  const renderItem = ({item}) =>
    (
    <View style={styles.card}>
      <TouchableOpacity style={{backgroundColor:item.isFavorite? "lightgreen":"lightgrey", padding:90}} onPress={() => handlePress(item.id)}>
        <Text style = {{textAlign: "center"}}>{item.name}</Text>
      </TouchableOpacity>
    </View>
    );

    const renderFooter = () => {
      return isLoading ? <ActivityIndicator size="large" color="#000" /> : null;
    };

  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={fetchData}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: "1%",
    paddingBottom: "1%",
    alignItems: "center",
  },

  card: {
    borderWidth: 1,
    alignSelf: "center",
    marginTop: "5%",
    width: "60%",
  },
});
