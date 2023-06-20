import { ActionFunction, redirect } from "react-router-dom";

export const createProduct: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const createdData = Object.fromEntries(formData);
    const response = await fetch("http://localhost:3001/products", {
        method: "post",
        body: JSON.stringify({
            ...createdData,
            count: +createdData.count,
            price: +createdData.price,
            inCart: false,
        }),
        headers: {
            "Content-type": "application/json"
        }
    });
    const data = await response.json();

    return redirect(`/products/${data.id}`);
}

export const deleteProduct: ActionFunction = async ({ params }) => {
    const { productId } = params;
    try {
        await fetch(`http://localhost:3001/products/${productId}`, {
            method: "delete",
        });
        return redirect('/products');
    } catch (e) {
        throw new Error('Произошла ошибка');
    }
}

export const updateProduct: ActionFunction = async ({ params, request }) => {
    const { productId } = params;
    const formData = await request.formData();
    const updateData = Object.fromEntries(formData);
    const response = await fetch(`http://localhost:3001/products/${productId}`, {
        method: "put",
        body: JSON.stringify({
            ...updateData,
            count: +updateData.count,
            price: +updateData.price,
            inCart: updateData.inCart,
        }),
        headers: {
            "Content-type": "application/json"
        }
    });
    const data = await response.json();

    return redirect(`/products/${data.id}`);
}
