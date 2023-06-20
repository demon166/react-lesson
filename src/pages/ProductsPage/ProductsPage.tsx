import { Form, Link, useLoaderData } from "react-router-dom";
import { IProduct } from "types";

const ProductsPage = () => {
    const products = useLoaderData() as IProduct[];
    const f = {
        inCart: "false",
        name: "Яблоки",
        count: "1",
        price: "122"
    }
    return (
        <div>
            <h1>Страница всех продуктов</h1>
            <Form action="" method="post">
                <input className="form-control" type="hidden" name="inCart" value="false"/>
                <input className="form-control" type="text" name="name" placeholder="name"/>
                <input className="form-control" type="number" name="count" placeholder="count"/>
                <input className="form-control" type="number" name="price" placeholder="price"/>
                <button className="btn btn-success" type="submit">Отправить</button>
            </Form>
            <ul className="list-group">
                {
                    products.map(p => (

                        <li key={p.id} className="list-group-item">
                            <Link to={p.id.toString()}>{p.name}</Link>
                        </li>
                    ))
                }
            </ul>

        </div>
    );
};

export default ProductsPage;