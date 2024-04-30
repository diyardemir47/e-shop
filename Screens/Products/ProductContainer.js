import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatListComponent } from 'react-native';
import ProductCard from './ProductCard';
import data from '../../assets/data/products.json';
import { FlatList } from 'react-native-web';

export default function ProductContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ÜRÜNLER</Text>
      <ScrollView numColumns={2} contentContainerStyle={styles.productList}>
        <View style={styles.row}>
          {products.map((product, index) => (
            <View key={index} style={styles.productItem}>
              <ProductCard {...product} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productList: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  productItem: {
    width: '48%', // İki kartın yanyana sığması için genişliği azaltıldı
    marginBottom: 10,
  },
});
