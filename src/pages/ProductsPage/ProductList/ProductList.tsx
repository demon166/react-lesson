import {Link, useLoaderData} from "react-router-dom";
import { IProduct } from "types";
import ProductListItem from "./ProductListItem/ProductListItem";

const ProductList = () => {
    const { data } = useLoaderData() as { data: IProduct[] };

    return (
        <ul className="list-group">
            {
                data.map(p => (
                    <ProductListItem p={p} key={p.id}/>
                ))
            }
            <Link to="/products/20">Фейк</Link>
        </ul>
    );
};

export default ProductList;