import React, { useState, useCallback } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Dimensions, Button } from "react-native";
import { Header, Item, Input } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import baseURL from "../../assets/common/baseUrl";

var { height, width } = Dimensions.get("window");

const Products = (props) => {
    const [productList, setProductList] = useState();
    const [productFilter, setProductFilter] = useState();
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState();

    useFocusEffect(
        useCallback(() => {
            const fetchProducts = async () => {
                try {
                    const res = await AsyncStorage.getItem("jwt");
                    setToken(res);
                    const response = await axios.get(`${baseURL}products`);
                    setProductList(response.data);
                    setProductFilter(response.data);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                }
            };

            fetchProducts();

            return () => {
                setProductList();
                setProductFilter();
                setLoading(true);
            };
        }, [])
    );

    return (
        <View>
       <View>
        <Header searchBar rounded>
            <Item style={{padding:5}}>
                <Icon name="search" />
                <Input placeholder="Search" />

            </Item>
        </Header>
       </View>
{loading? (
    <View>
        <ActivityIndicator size="large" color="red" />
        </View>
): (
    <FlatList data={productFilter}
    renderItem={({item,index}) =>(
        <Text>{item.name}</Text>
    )}
    keyExtractor={(item)=>item.id} />
)}

        </View>
    );
};

export default Products;
