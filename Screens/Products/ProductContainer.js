import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-web'

const data=require('../../assets/data/products.json');

export default function ProductContainer() {

 const [products,setProducts] =useState([]);

 useEffect(()=>{

    setProducts(data);
    return ()=>{
        setProducts([])
    }
 },[])

  return (
    <View > 
        <Text>PRODUCT CONTAINER</Text>
        <View style={{marginTop:100}}>
      <FlatList 
      
      data={products}
      renderItem={({item})=> <ProductList/>}
      keyExtractor={item=>item.name}
      />
    </View></View>
  )
}

const styles = StyleSheet.create({})