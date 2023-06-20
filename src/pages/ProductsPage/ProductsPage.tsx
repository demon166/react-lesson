import ProductList from "./ProductList/ProductList";
import { Link, Outlet } from "react-router-dom";
import SearchProduct from "pages/ProductsPage/SearchProduct/SearchProduct";

const ProductsPage = () => {
    return (
        <div>
            <h1>Страница всех продуктов</h1>
            <div className="row">
                <div className="col-3">
                    <div className="d-flex mb-2">
                        <SearchProduct/>
                        <Link to="/products/create" className="btn btn-dark">Добавить</Link>
                    </div>
                    <ProductList/>
                </div>
                <div className="col-9">
                    <Outlet/>
                </div>
            </div>

        </div>
    );
};

export default ProductsPage;