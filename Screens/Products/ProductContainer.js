import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View,  ScrollView, FlatList, Image } from 'react-native';
import ProductCard from './ProductCard';
import data from '../../assets/data/products.json';
import { Container,Header, Icon,Input,Item} from 'native-base';

export default function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [productsFiltered,setProductFileted]=useState([]);



  useEffect(() => {
    setProducts(data);
    setProductFileted(data);
    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <Container>
      <Header searchBar rounded> 
      <Item> 
        <Icon name='ios-search'/>
        <Input placeholder='Search'
        //onFocus={}
        //onChangeText={(text)=>}
        />
      </Item>
      </Header> 
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
      <ScrollView contentContainerStyle={styles.productList}>
        <View style={styles.row}>
          <FlatList
            data={products}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.productItem}>
                <ProductCard {...item} />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </View></Container>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
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
