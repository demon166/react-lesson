import { LoaderFunction } from "react-router-dom";

export const getProducts: LoaderFunction = async ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    let path = `http://localhost:3001/products`;
    if (q) {
        path += `?name_like=${q}`;
    }
    const response = await fetch(path);
    const data = await response.json();
    return { data, q };
}

export const getProductItem: LoaderFunction = async ({ params }) => {
    const response = await fetch(`http://localhost:3001/products/${params.productId}`);
    const data = await response.json();
    return data;
}