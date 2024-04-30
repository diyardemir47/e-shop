import React from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native-web';
import ProductCard from './ProductCard';

const { width } = Dimensions.get("window");

const ProductList = (props) => {
    const { item } = props;

    return (
        <TouchableOpacity style={{ width: '50%' }}>
            <View style={{ width: '100%', backgroundColor: 'gainsboro', padding: 10 }}>
                {/* Add content here if needed */}
            </View>
            <ProductCard {...item} />
        </TouchableOpacity>
    );
}

export default ProductList;
