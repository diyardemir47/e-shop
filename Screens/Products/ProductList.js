import React from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native';
import ProductCard from './ProductCard';

const { width } = Dimensions.get("window");

const ProductList = (props) => {
    const { item } = props;

    return (
        <View style={{ width: '50%' }}> {/* TouchableOpacity kullanmadan direkt View kullanıldı */}
            <TouchableOpacity onPress={() => {/* Handle press */}} style={{ width: '100%', backgroundColor: 'gainsboro', padding: 10 }}>
                {/* Add content here if needed */}
            </TouchableOpacity>
            <ProductCard {...item} />
        </View>
    );
}

export default ProductList;
