import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, FlatList, Image } from 'react-native'; // Image import eklendi
import ProductCard from './ProductCard';
import data from '../../assets/data/products.json';

export default function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductFiltered] = useState([]);

  useEffect(() => {
    setProducts(data);
    setProductFiltered(data);
    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Button pressed')}>
        <View style={styles.button}>
          <Image
            source={require('../../assets/chameleon.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Press me</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.heading}>ÜRÜNLER</Text>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <ProductCard {...item} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.productList} // contentContainerStyle eklendi
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productList: {
    flexGrow: 1,
  },
  productItem: {
    width: '48%',
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});
