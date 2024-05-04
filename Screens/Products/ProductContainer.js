import React, { useEffect, useState } from 'react';
import { StyleSheet,ActivityIndicator, TouchableOpacity, View, Text, FlatList, Image } from 'react-native'; // Image import eklendi
import ProductCard from './ProductCard';
import data from '../../assets/data/products.json';
import { Container, Input, Item, Header, Icon } from 'native-base';
import SearchedProducts from './SearchedProducts';
import ProductList from './ProductList';
import Banner from '../../Shared/Banner';
import CategoryFilter from './CategoryFilter';


export default function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState(false);
  const [categories, setCategories] = useState([]);
  const [active,setActive]=useState();
  const [initialState,setInitialState]=useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    setCategories(categories);
    setActive(-1)
    setInitialState(data)
    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus();
      setCategories()
      setInitialState()
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
    <>
    {loading == false ? (
 <Container>
 <Header searchBar rounded>
   <Item>
     <Icon name="ios-search" />
     <Input
       placeholder="Search"
       onFocus={openList}
       onChangeText={(text) => searchProduct(text)}
     />
     {focus == true ? <Icon onPress={onBlur} name="ios-close" /> : null}
   </Item>
 </Header>
 {focus == true ? (
   <SearchedProduct 
   navigation={props.navigation}
   productsFiltered={productsFiltered} />
 ) : (
   <ScrollView>
     <View>
       <View>
         <Banner />

         
       </View>

       
       <View>
         <CategoryFilter
           categories={categories}
           categoryFilter={changeCtg}
           productsCtg={productsCtg}
           active={active}
           setActive={setActive}
         />
       </View>
       {productsCtg.length > 0 ? (
       <View style={styles.listContainer}>
           {productsCtg.map((item) => {
               return(
                   <ProductList
                       navigation={props.navigation}
                       key={item.name}
                       item={item}
                   />
               )
           })}
       </View>
       ) : (
           <View style={[styles.center, { height: height / 2}]}>
               <Text>No products found</Text>
           </View>
       )}
      
     </View>
   </ScrollView>
 )}
</Container>
    ) : (
      // Loading
      <Container style={[styles.center, { backgroundColor: "#f2f2f2" }]}>
        <ActivityIndicator size="large" color="red" />
      </Container>
    )}
   </>
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
