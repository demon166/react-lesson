import { useState } from "react";
import Counter from "./components/Counter";
import MyButton from "./components/MyButton";
import Product, { IProduct } from "./components/Product";
import ProductList from "./components/ProductList";
import Profile from "./components/Profile";
import MyInput from "./components/MyInput";
import MyForm from "./components/MyForm";

function App() {
  const [productList, setProductList] = useState<IProduct[]>([
    { id: 1, count: 1, name: "Бананы", inCart: false, price: 1000 },
  ]);

  const addProduct = (product: IProduct) => {
    product.id = Math.max(...productList.map((p) => p.id), 0) + 1;
    setProductList([...productList, product]);
  };
  return (
    <div>
      <MyForm addProduct={addProduct} />
      <ProductList products={productList} />
    </div>
  );
}

export default App;
