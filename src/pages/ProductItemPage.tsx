import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { IProduct } from "types";
import MyButton from "components/MyButton";
import { Icons } from "components";

const ProductItemPage = () => {
    const product = useLoaderData() as IProduct;
    const navigate = useNavigate();
    return (
        <div>
            <h1>{product.name}</h1>
            <p>Количество: {product.count}</p>
            <p>Цена: {product.price}</p>
            <MyButton>{product.inCart ? "В корзине" : "Добавить в корзину"}</MyButton>
            <div className="d-flex mt-2">
                <div className="m-1">
                    <MyButton type="submit" onClick={() => {
                        navigate(`edit`)
                    }}><Icons.PencilIcon/></MyButton>
                </div>
                <div className="m-1">
                    <Form method="delete" action="delete">
                        <MyButton type="submit"><Icons.TrashIcon/></MyButton>
                    </Form>
                </div>
            </div>


        </div>
    );
};

export default ProductItemPage;