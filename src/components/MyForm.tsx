import {useState} from "react";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import {IProduct} from "./Product";

const initValue: IProduct = {
    id: 0,
    count: 1,
    inCart: false,
    name: "",
    price: 0,
};

interface MyFormProps {
    addProduct: (product: IProduct) => void;
}

type TStatusForm = "empty" | "typing" | "submitting" | "success" | "error";

const MyForm = ({addProduct}: MyFormProps) => {
    const [status, setStatus] = useState<TStatusForm>("empty");
    const [product, setProduct] = useState<IProduct>(initValue);
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.value.length !== 0) {
            setStatus("typing");
        } else {
            setStatus("empty");
        }
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        addProduct(product);
        setProduct(initValue);
    };
    const isDisableButton = status !== 'typing';
    return (
        <>
            <h2>Добавление товаров</h2>
            <form onSubmit={handleSubmit}>
                <MyInput
                    handleChange={handleChange}
                    name="name"
                    value={product.name}
                    placeholder="Название товара"
                />
                <MyInput
                    type="number"
                    handleChange={handleChange}
                    name="count"
                    value={product.count}
                    placeholder="Количество"
                />
                <MyInput
                    type="number"
                    handleChange={handleChange}
                    name="price"
                    value={product.price}
                    placeholder="Цена"
                />
                <MyButton disabled={isDisableButton} type="submit">Добавить товар</MyButton>
            </form>
        </>

    );
};

export default MyForm;
