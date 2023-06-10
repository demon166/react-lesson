import React, { ReactElement, useReducer} from 'react';
import {ProductsContext, ProductsDispatchContext} from "./productsContext";
import {productReducer} from "../../store/productReducer";

interface ProductsProviderProps {
    children: ReactElement[];
}

const initialState = [
    { id: 1, count: 1, name: "Бананы", inCart: false, price: 1000 },
    { id: 2, count: 1, name: "Яблоки", inCart: false, price: 1000 },
    { id: 3, count: 1, name: "Груши", inCart: false, price: 1000 },
    { id: 4, count: 1, name: "Сливы", inCart: false, price: 1000 },
    { id: 5, count: 1, name: "Апельсины", inCart: false, price: 1000 },
    { id: 6, count: 1, name: "Мандарины", inCart: false, price: 1000 },
    { id: 7, count: 1, name: "Киви", inCart: false, price: 1000 },
    { id: 8, count: 1, name: "Личи", inCart: false, price: 1000 },
    { id: 9, count: 1, name: "Абрикосы", inCart: false, price: 1000 },
    { id: 10, count: 1, name: "Персики", inCart: false, price: 1000 },
    { id: 11, count: 1, name: "Лимоны", inCart: false, price: 1000 },
    { id: 12, count: 1, name: "Лайм", inCart: false, price: 1000 },
    { id: 13, count: 1, name: "Абрикосы", inCart: false, price: 1000 },
    { id: 14, count: 1, name: "Сливы", inCart: false, price: 1000 },
    { id: 15, count: 1, name: "Мандарины", inCart: false, price: 1000 },
    { id: 16, count: 1, name: "Яблоки", inCart: false, price: 1000 },
    { id: 17, count: 1, name: "Бананы", inCart: false, price: 1000 },
    { id: 18, count: 1, name: "Личи", inCart: false, price: 1000 },
    { id: 19, count: 1, name: "Бананы", inCart: false, price: 1000 },
    { id: 20, count: 1, name: "Киви", inCart: false, price: 1000 },
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