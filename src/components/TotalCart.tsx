import React from 'react';
import {useProducts} from "../hooks/useProducts";

const TotalCart = () => {
    const product = useProducts();
    const total = product.reduce((acc, currentValue) => {
        return acc + currentValue.price * currentValue.count;
    }, 0)
    return (
        <div>
            Итого: {total} руб.
        </div>
    );
};

export default TotalCart;