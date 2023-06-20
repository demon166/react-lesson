import { Form, useLoaderData } from "react-router-dom";
import MyInput from "components/MyInput";
import MyButton from "components/MyButton";
import { IProduct } from "types";

const EditProductForm = () => {
    const product = useLoaderData() as IProduct;
    return (
        <Form action="" method="put">
            <MyInput name="name" type="text" placeholder="Название" defaultValue={product.name}/>
            <MyInput name="count" type="number" placeholder="Количество" defaultValue={product.count}/>
            <MyInput name="price" type="number" placeholder="Цена" defaultValue={product.price}/>
            <input type="hidden" name="inCart" value={product.inCart.toString()}/>
            <MyButton type="submit">Отправить</MyButton>
        </Form>
    );
};

export default EditProductForm;