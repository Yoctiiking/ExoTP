import React from "react";
import { View, Text, StyleSheet, ScrollViewComponent, ScrollView } from "react-native";


export default function App(){

  const Card = ({title, content, children}) => {

    return(
          <View style = {style.constainer}>
            <Text style = {style.title}>{title}</Text>
            <Text style = {style.content}>{content}</Text>
            
            { children ?(
              <View style = {style.supView}>
                  <Text style = {style.supContent}>{children}</Text>
              </View>
            ) : null}

          </View>
    )
  }
  return(
    <View>
      <Card title={"AZERTY"} content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card>
      <Card title={"lorem"} content={"lorem ipsum"}></Card>
    </View>
  )
}

const style = StyleSheet.create({

  constainer:{
    width: "90%",
    height: "auto",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "green",
    alignSelf: "center",
    marginTop: "5%",
  },

  title:{
    fontSize: 25,
    fontWeight: "bold",
    color: "orange",
    left: 20,
  },

  content:{
    fontSize: 18,
    color: "white",
    left: 10,
    textAlign: "justify",
  },

  supView:{
      left: "60%",
      width: "40%",
      height: "auto",
      padding: 5,
      marginTop: 10,
      marginBottom: 0,
      borderRadius: 10,
      backgroundColor: "orange",
  },

  supContent:{
    fontSize: 15,
    textAlign: "center",
    color: "#ff0066",
  }
})