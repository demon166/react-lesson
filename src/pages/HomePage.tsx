import React, {useState} from 'react';
import {IProduct} from "../components/Product";
import MyForm from "../components/MyForm";
import ProductList from "../components/ProductList";

const initialState = [
    { id: 1, count: 1, name: "Бананы", inCart: false, price: 1000 },
]

const HomePage = () => {
    const [productList, setProductList] = useState<IProduct[]>(initialState);

    const addProduct = (product: IProduct) => {
        product.id = Math.max(...productList.map((p) => p.id), 0) + 1;
        setProductList([...productList, product]);
    };

    const updateProduct = (product: IProduct) => {
        setProductList(productList.map(p => p.id === product.id ? product : p ))
    }

    const deleteProduct = (product: IProduct) => {
        setProductList(productList.filter(p => p.id !== product.id ))
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