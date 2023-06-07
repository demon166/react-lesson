import MyButton from "./MyButton";

export interface IProduct {
  id: number;
  name: string;
  count: number;
  price: number;
  inCart: boolean;
}

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const { count, inCart, name, price } = product;
  const onClickIncrement = () => {
    alert(" + 1 ");
  };
  const onClickDecrement = () => {
    alert(" - 1 ");
  };
  return (
    <div>
      <span>
        <span className="span">{inCart && "✔"}</span>
        <span className="span">{name}</span>
        <span className="span">{count}</span>
        <span className="span">{price}</span>
        <span className="span">{price * count}</span>
      </span>
      <MyButton onClick={onClickIncrement}>+ 1</MyButton>
      <MyButton onClick={onClickDecrement}>- 1</MyButton>
      <MyButton>Удалить</MyButton>
    </div>
  );
};

export default Product;
