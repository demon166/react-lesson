import React from 'react';
import MyForm from "../components/MyForm";
import ProductList from "../components/ProductList";
import ThemesChanger from "../components/ThemesChanger";
import ProductsProvider from "../context/Products/ProductsProvider";
import TotalCart from "../components/TotalCart";

const HomePage = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <ThemesChanger />
                </div>
            </div>
            <ProductsProvider>
                <div className="row">
                    <div className="col-12">
                        <MyForm />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ProductList />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <TotalCart />
                    </div>
                </div>
            </ProductsProvider>
        </>
    );
};

export default HomePage;