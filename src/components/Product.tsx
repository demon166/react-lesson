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
  updateProduct: (product: IProduct) => void;
  deleteProduct: (product: IProduct) => void;
}

const Product = ({ product, updateProduct, deleteProduct }: ProductProps) => {
  const { count, inCart, name, price } = product;
  const handleIncrement = () => {
    updateProduct({
      ...product,
      count: product.count + 1
    })
  };
  const handleDecrement = () => {
    updateProduct({
      ...product,
      count: product.count - 1
    })
  };
  const handleDelete = () => {
    deleteProduct(product);
  }

  const toggleCart = () => {
    updateProduct({
      ...product,
      inCart: !product.inCart
    })
  }

  return (
    <tr>
      <td>
        {inCart && "✔"}
      </td>
      <td>{name}</td>
      <td>{count}</td>
      <td>{price}</td>
      <td>{price * count}</td>
      <td><MyButton onClick={toggleCart}> В корзине </MyButton></td>
      <td>
        <MyButton onClick={handleIncrement}>+ 1</MyButton>
        <MyButton onClick={handleDecrement}>- 1</MyButton>
      </td>
      <td>
        <MyButton onClick={handleDelete}>Удалить</MyButton>
      </td>
    </tr>
  );
};

export default Product;
