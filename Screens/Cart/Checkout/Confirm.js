import React from "react";
import { View, Text, Dimensions, ScrollView, Button, StyleSheet } from 'react-native';
import { Left, Right, ListItem, Thumbnail, Body } from "native-base";
import { connect } from "react-redux";
import * as actions from '../../../Redux/Actions/cartAction';

const { width, height } = Dimensions.get("window");

const Confirm = (props) => {
  const { route, navigation } = props;
  const confirm = route.params;

  const confirmOrder = () => {
    setTimeout(() => {
      props.clearCart();
      navigation.navigate("Cart");
    }, 500);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Confirm Order</Text>
        {confirm ? (
          <View style={styles.orderContainer}>
            <Text style={styles.shipping}>Shipping to:</Text>
            <View style={styles.addressContainer}>
              <Text>Address: {confirm.order.order.shippingAddress1}</Text>
              <Text>Address2: {confirm.order.order.shippingAddress2}</Text>
              <Text>City: {confirm.order.order.city}</Text>
              <Text>Zip Code: {confirm.order.order.zip}</Text>
              <Text>Country: {confirm.order.order.country}</Text>
            </View>
            <Text style={styles.title}>Items:</Text>
            {confirm.order.order.orderItems.map((x) => (
              <ListItem style={styles.listItem} key={x.product.name} avatar>
                <Left>
                  <Thumbnail source={{ uri: x.product.image }} />
                </Left>
                <Body style={styles.body}>
                  <Text>{x.product.name}</Text>
                  <Right>
                    <Text>${x.product.price}</Text>
                  </Right>
                </Body>
              </ListItem>
            ))}
          </View>
        ) : (
          <Text>No order details found!</Text>
        )}
        <View style={styles.buttonContainer}>
          <Button title="Place Order" onPress={confirmOrder} />
        </View>
      </View>
    </ScrollView>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart())
  }
}

const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 8,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    margin: 8,
    fontSize: 20,
    fontWeight: 'bold'
  },
  orderContainer: {
    borderWidth: 1,
    borderColor: 'orange',
    padding: 8,
    width: width - 20
  },
  shipping: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  addressContainer: {
    padding: 8
  },
  listItem: {
    backgroundColor: 'white',
    width: width / 1.2
  },
  body: {
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonContainer: {
    marginVertical: 20
  }
});

export default connect(null, mapDispatchToProps)(Confirm);
