import { useLoaderData } from "react-router-dom";
import { IProduct } from "types";
import ProductListItem from "./ProductListItem/ProductListItem";

const ProductList = () => {
    const products = useLoaderData() as IProduct[];

    return (
        <ul className="list-group">
            {
                products.map(p => (
                    <ProductListItem p={p} key={p.id}/>
                ))
            }
        </ul>
    );
};

export default ProductList;