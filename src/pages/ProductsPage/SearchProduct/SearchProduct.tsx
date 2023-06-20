import { Form, useLoaderData } from "react-router-dom";

const SearchProduct = () => {
    const { q } = useLoaderData() as { q: string };
    return (
        <Form>
            <input
                type="search"
                name="q"
                className="form-control"
                placeholder="Поиск..."
                defaultValue={q}
            />
        </Form>
    );
};

export default SearchProduct;