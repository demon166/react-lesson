import Product from "./Product";
import {useProducts} from "../hooks/useProducts";

const ProductList = () => {
    const products = useProducts();
    return (
        <table className="table table-bordered mt-3">
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
        </table>
    );
};

export default ProductList;
