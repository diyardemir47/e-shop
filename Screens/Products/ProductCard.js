import React from 'react';
import { Button, StyleSheet, View, Dimensions, Image, Text } from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/cartAction';
import Toast from 'react-native-toast-message';

const { width } = Dimensions.get("window");

const ProductCard = (props) => {
  const { name, price, image, countInStock } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 15 - 3) + '...' : name}
      </Text>
      <Image source={{ uri: image ? image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png' }} style={styles.image} resizeMode="contain" />
      <Text style={styles.price}>${price}</Text>

      {countInStock > 0 ? (
        <Button title="Add to Cart" 
        color="green"
        onPress={() => {
          props.addItemToCart(props),
          Toast.show({
            topOffset:60,
            type:"success",
            text1:`${name} added to Cart`,
            text2:"Go to your cart to complete order"
          })
        }} />
      ) : (
        <Text style={styles.unavailableText}>Currently Unavailable</Text>
      )}
    </View>
  );
}

const mapDispatchToProps=(dispatch)=>{
  return {
    addItemToCart:(product) => 
      dispatch(actions.addToCart({quantity:1,product}))
  }
}

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    padding: 10,
    borderRadius: 10,
    marginTop: 35,
    marginBottom: 10,
    marginLeft: 10,
    alignItems: 'center',
    elevation: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: 150, // Yükseklik ayarlandı
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  price: {
    fontSize: 20,
    color: 'orange',
    marginBottom: 'auto', // En altta olması için marginBottom kullanılır
    marginTop: 10, // Kartın üstüne bir boşluk ekler
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
  unavailableText: {
    marginTop: 10, // Currently Unavailable metninin üstünde bir boşluk ekler
    color: 'red',
    fontStyle: 'italic',
  }
});

export default connect(null,mapDispatchToProps) (ProductCard);