import { useLoaderData } from "react-router-dom";
import { IProduct } from "types";

const ProductItemPage = () => {
    const product = useLoaderData() as IProduct;
    return (
        <div>
            <h1>Страница продукта</h1>
            <p>{product.name}</p>
            <p>{product.count}</p>
            <p>{product.inCart}</p>
            <p>{product.price}</p>
        </div>
    );
};

export default ProductItemPage;