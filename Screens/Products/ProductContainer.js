import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, FlatList, Image } from 'react-native'; // Image import eklendi
import ProductCard from './ProductCard';
import data from '../../assets/data/products.json';
import { Container, Input, Item, Header, Icon } from 'native-base';
import SearchedProducts from './SearchedProducts';
import ProductList from './ProductList';
import Banner from '../../Shared/Banner';

export default function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    return () => {
      setProducts([]);
      setProductsFiltered([]);
    };
  }, []);

  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <Container>
      <Header>
        <Item>
          <Icon name='ios-search' />
          <Input
            placeholder='Search'
            onFocus={openList}
            onChangeText={(text) => searchProduct(text)}
          />
          {focus ? <Icon onPress={onBlur} name='ios-close' /> : null}
        </Item>
      </Header>
      {focus ? (
        <SearchedProducts productsFiltered={productsFiltered} />
      ) : (
        <View style={styles.container}>
          <View>
            <Banner />
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={products}
              numColumns={2}
              renderItem={({ item }) => (
                <ProductList key={item.brand} item={item} />
              )}
              keyExtractor={(item) => item.brand}
            />
          </View>
        </View>
      )}
    </Container>
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
