import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, FlatList, Image } from 'react-native'; // Image import eklendi
import ProductCard from './ProductCard';
import data from '../../assets/data/products.json';
import { Container,Input,Item,Header, Icon } from 'native-base';
import SearchedProducts from './SearchedProducts';

export default function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductFiltered] = useState([]);
  const [focus,setFocus]=useState();

  useEffect(() => {
    setProducts(data);
    setProductFiltered(data);
    setFocus(false);
    return () => {
      setProducts([]);
      setProductFiltered([])
      setFocus()
    };
  }, []);

const searchProduct=(text) =>{

  setProductFiltered(
    products.filter((i)=>i.name.toLowerCase().includes(text.toLowerCase()))
  )
}

const openList=()=> {
  setFocus(true);
}

const onBlur=()=>{
  setFocus(false);
}

  return (
<Container>
  <Header>
    <Item>
      <Icon name='ios-search'/>
      <Input placeholder='Search' 
      onFocus={openList}
      onChangeText={(text)=> searchProduct(text)}
      />

      {focus==true ? (
        <Icon onPress={onBlur} name='ios-close' />
      ):null} 
    </Item>
  </Header>
  {focus==true ? (
<SearchedProducts productsFiltered={productsFiltered}/>
  ): (
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
