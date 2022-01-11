import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, StyleSheet, FlatList } from 'react-native';


export default function App() {


  const [fruits, setFruits] = useState();
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    fetch("http://10.0.2.2:8080/fruits")
      .then(response => response.json())
      .then((responseJson) => {
        console.log('getting data from fetch', responseJson);
        setFruits(responseJson);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <View>
      <Text style={style.titulo}>LAS FRUTAS DISPONIBLES SON:</Text>
      <FlatList
        data={fruits}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return(
            <Text style={style.frutas}>Name: {item.name}, Price: {item.price}</Text>
          )

        }}
      />

    </View>
  )

}
const style = StyleSheet.create({
  titulo: {
    marginTop: 10,
    marginBottom:20,
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: 18
  },
  frutas:{
    fontWeight:'bold'
  }
})

