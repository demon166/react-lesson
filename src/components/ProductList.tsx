import Product from "./Product";
import {useProducts} from "../hooks/useProducts";
import {useRef} from "react";
import {useListProduct} from "../hooks/useListProduct";

const ProductList = () => {
    const products = useProducts();
    const listRef = useListProduct();
    return (
        <table className="table table-bordered table-striped mt-3">
            <thead>
            <tr>
                <th>В корзине</th>
                <th>Наименование</th>
                <th>Количество</th>
                <th>Цена</th>
                <th>Сумма</th>
                <th colSpan={4}></th>
            </tr>
            </thead>
            <tbody ref={listRef}>
            {
                products.length > 0
                    ? products.map((product) => (
                        <Product
                            key={product.id}
                            product={product}
                        />
                    ))
                    : (
                        <tr>
                            <td>
                                <h2>Добавьте товары</h2>
                            </td>
                        </tr>

                    )

            }
            </tbody>
        </table>
    );
};

export default ProductList;
