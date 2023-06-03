import Product, { IProduct } from "./Product";

interface ProductListProps {
  products: IProduct[];
}
const ProductList = ({ products }: ProductListProps) => {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
