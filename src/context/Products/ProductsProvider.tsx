import React, { ReactElement, useReducer} from 'react';
import {ProductsContext, ProductsDispatchContext} from "./productsContext";
import {productReducer} from "../../store/productReducer";

interface ProductsProviderProps {
    children: ReactElement[];
}

const initialState = [
    { id: 1, count: 1, name: "Бананы", inCart: false, price: 1000 },
]

const ProductsProvider = ({children}: ProductsProviderProps) => {
    const [productList, dispatch] = useReducer(productReducer, initialState);
    return (
        <ProductsContext.Provider value={productList}>
            <ProductsDispatchContext.Provider value={dispatch}>
                { children }
            </ProductsDispatchContext.Provider>
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;