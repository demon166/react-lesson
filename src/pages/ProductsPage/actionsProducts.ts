import { ActionFunction } from "react-router-dom";

export const createProduct: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const data = await fetch("http://localhost:3001/products/1", {
        method: "post",
        body: JSON.stringify({
            name: formData.get('name'),
            count: formData.get('count'),
            price: formData.get('price'),
            inCart: false,
        }),
        headers: {
            "Content-type": "application/json"
        }
    });
    return data;
}