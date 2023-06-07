import React, {useReducer, useState} from 'react';
import {IProduct} from "../components/Product";
import MyForm from "../components/MyForm";
import ProductList from "../components/ProductList";
import {productReducer} from "../store/productReducer";

const initialState = [
    { id: 1, count: 1, name: "Бананы", inCart: false, price: 1000 },
]

const HomePage = () => {
    // const [productList, setProductList] = useState<IProduct[]>(initialState);
    const [productList, dispatch] = useReducer(productReducer, initialState);

    const addProduct = (product: IProduct) => {
        dispatch({
            type: "add",
            payload: product
        })
    };
    const updateProduct = (product: IProduct) => {
        dispatch({
            type: "update",
            payload: product,
        })
    }
    const deleteProduct = (product: IProduct) => {
        dispatch({
            type: "delete",
            payload: product,
        })
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <MyForm addProduct={addProduct} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ProductList
                        products={productList}
                        updateProduct={updateProduct}
                        deleteProduct={deleteProduct}
                    />
                </div>
            </div>
        </>

    );
};

export default HomePage;