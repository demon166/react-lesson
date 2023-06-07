import { useState } from "react";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import { IProduct } from "./Product";

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

const MyForm = ({ addProduct }: MyFormProps) => {
  const [product, setProduct] = useState<IProduct>(initValue);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
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
  return (
    <form onSubmit={handleSubmit}>
      <MyInput handleChange={handleChange} name="name" value={product.name} />
      <MyInput
        type="number"
        handleChange={handleChange}
        name="count"
        value={product.count}
      />
      <MyInput
        type="number"
        handleChange={handleChange}
        name="price"
        value={product.price}
      />
      <MyButton type="submit">Добавить товар</MyButton>
    </form>
  );
};

export default MyForm;
