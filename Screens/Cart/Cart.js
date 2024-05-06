import React from 'react'
import {Button, Dimensions, Text,TouchableOpacity,StyleSheet} from 'react-native'


import { connect } from 'react-redux'

import Icon from 'react-native-vector-icons/FontAwesome';
import *as actions from '../../Redux/Actions/cartAction';
import { Body, Container, Left, ListItem, Right, Thumbnail } from 'native-base';

import { SwipeListView } from 'react-native-swipe-list-view';
import CartItem from './CartItem';



var {height,width}=Dimensions.get("window")

const Cart=(props) => {

    var total=0;
    props.cartItems.forEach(cart=>{
        return (total +=cart.product.price)
    });

    return (
        
      <>
      {props.cartItems.length ? (
        <Container>
<H1 style={{alignSelf:'center'}}>

    <SwipeListView  data={props.cartItems}
    renderItem={(data)=>{
        <CartItem item={data} />
    }}
    renderHiddenItem={(data)=>{
        <View style={styles.hiddenContainer}>
        <TouchableOpacity 
                style={styles.hiddenButton}
                onPress={() => props.removeFromCart(data.item)}
                >
                <Icon 
                name='trash'
                color={"white"}
                size={30}
                />
            </TouchableOpacity>
        </View>
    }}

    disableRightSwipe={true}
    previewOpenDelay={3000}
    friction={1000}
    tension={40}
    leftOpenValue={75}
    stopLeftSwipe={75}
    rightOpenValue={-75}
    />


</H1>
{props.cartItems.map(data=>{
    return (
        <ListItem style={styles.listItem}
        key={Math.random()}
        avatar
        >
<Left>
    <Thumbnail source={{uri:data.product.image ? data.product.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}/>

 
</Left>
<Body style={styles.body}>
<Left>
    <Text>{data.product.name}</Text>
</Left>
<Right>
    <Text>
        $ {data.product.price}
    </Text>
</Right>
</Body>
        </ListItem>
    )
})}
<View>
<Left>
<Text style={styles.price}>
$ {total}
</Text>

</Left>

<Right>
    <Button  title="Clear"
    onPress={()=>props.clearCart()}
    />
</Right>
<Right>
    <Button  title="Checkout" onPress={()=>props.navigation.navigate('Checkout')}/>
</Right>
</View>

        </Container>
      ):
      (
        <Container style={StyleSheet.emptyContainer}>
            <Text>LOOKS LİKE YOUR CART İS EMPTY</Text>
            <Text>Add product to your cart to get started</Text>
        </Container>
      )
      }
      </>
    )
}

const mapStateToProps=(state)=>{
    const {cartItems}=state;
    return{
        cartItems:cartItems
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      clearCart: () => dispatch(actions.clearCart()),
      removeFromCart: (item) => dispatch(actions.removeFromCart(item))
      }
  }

const styles=StyleSheet.create({
    emptyContainer:{
height:height,
alignItems:'center',
justifyContent:'center'

    },
    listItem:{
        alignItems:'center',
        backgroundColor:'white',
        justifyContent:'center'
    },
    body:{
        margin:10,alignItems:'center',
        flexDirection:'row'
    },
    bottomContainer:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        left:0,
        backgroundColor:'white',
        elevation:0,

    }
,price:{
    fontSize:18,
    mardin:20,
    color:'red'
},
hiddenContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  hiddenButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 25,
    height: 70,
    width: width / 1.2
  }
})

export default   connect(mapStateToProps,mapDispatchToProps) (Cart);