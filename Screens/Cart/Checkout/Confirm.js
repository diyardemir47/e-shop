import React from "react";
import {View,Text,Dimensions,ScrollView} from 'react-native';

import { Left,Text,Right,ListItem,Thumbnail,Body } from "native-base";

import { connect } from "react-redux";
import * as actions from '../../../Redux/Actions/cartAction'

var {height} =Dimensions.get("window")

const confirm = props.route.params




const Confirm=(props)=> {

return (

 <ScrollView contentContainerStyle={styles.container}>

<View style={styles.titleContainer}>
<Text style={{fontSize:20,fontWeight:'bold'}}>
    Confirm Order
</Text>
{props.route.params ?
<View style={{borderWidth:1,borderColor:'orange'}}>
<Text style={styles.shipping}>Shipping to:</Text>
<View style={{padding:8}}> 

<Text>Address: {confirm.order.order.shippingAddress1}</Text>
<Text>Address2: {confirm.order.order.shippingAddress2}</Text>
<Text>City: {confirm.order.order.city}</Text>
<Text>Zip Code: {confirm.order.order.zip}</Text>
<Text>Country: {confirm.order.order.country}</Text>

</View>

</View>
: null }
</View>
 </ScrollView>
)

}

const styles=StyleSheet.create({


    container:{

height:height,
padding:8,
alignContent:'center',
backgroundColor:'white'

    },
    titleContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    shipping:{
        alignSelf:'center',
        margin:8,
        fontSize:16,
        fontWeight:'bold'

    }
})


export default Confirm;