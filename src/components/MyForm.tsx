import {useState} from "react";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import {useProductDispatch} from "../hooks/useProductDispatch";
import {IProduct} from "../types";
import {useListProduct} from "../hooks/useListProduct";
import {flushSync} from "react-dom";

const initValue: IProduct = {
    id: 0,
    count: 1,
    inCart: false,
    name: "",
    price: 10,
};

type TStatusForm = "empty" | "typing" | "submitting" | "success" | "error";

const MyForm = () => {
    const dispatch = useProductDispatch();
    const [status, setStatus] = useState<TStatusForm>("empty");
    const [product, setProduct] = useState<IProduct>(initValue);
    const listRef = useListProduct();
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
        flushSync(() => {
            dispatch({
                type: "add",
                payload: product
            });
        });
        setProduct(initValue);
        listRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        })
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
