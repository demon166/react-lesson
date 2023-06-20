import { LoaderFunction } from "react-router-dom";

export const getProducts = async () => {
    const response = await fetch("http://localhost:3001/products");
    const data = await response.json();
    return data;
}

export const getProductItem: LoaderFunction = async ({ params }) => {
    const response = await fetch(`http://localhost:3001/products/${params.productId}`);
    const data = await response.json();
    return data;
}