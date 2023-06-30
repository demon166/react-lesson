import {Form, Link, useFetcher, useLoaderData, useNavigate} from "react-router-dom";
import { IProduct } from "types";
import MyButton from "components/MyButton";
import { Icons } from "components";

const ProductItemPage = () => {
    const product = useLoaderData() as IProduct;
    const fetcher = useFetcher();
    const navigate = useNavigate();
    return (
        <div>
            <h1>{product.name}</h1>
            <p>Количество: {product.count}</p>
            <p>Цена: {product.price}</p>
            { fetcher.state }
            <fetcher.Form action="edit" method="post">
                 <input type="hidden" name="name" value={product.name}/>
                 <input type="hidden" name="count" value={product.count}/>
                 <input type="hidden" name="price" value={product.price}/>
                 <input type="hidden" name="inCart" value={(!product.inCart).toString()}/>
                 <MyButton type="submit" disabled={fetcher.state !== "idle"}>
                     {
                         fetcher.formData?.get('inCart')
                             ? "В корзине"
                             : "Добавить в корзину"
                     }
                 </MyButton>
            </fetcher.Form>
            <div className="d-flex mt-2">
                <div className="m-1">
                   <MyButton onClick={() => {
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