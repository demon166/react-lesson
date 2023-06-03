import MyButton from "./components/MyButton";
import Product, { IProduct } from "./components/Product";
import ProductList from "./components/ProductList";
import Profile from "./components/Profile";

function App() {
  const products: IProduct[] = [
    {
      id: 1,
      name: "Яблоки",
      count: 2,
      price: 100,
      inCart: true,
    },
    {
      id: 2,
      name: "Груши",
      count: 5,
      price: 200,
      inCart: true,
    },
  ];
  return (
    <div>
      <h1>Моё первое приложение на REACT</h1>
      <Profile>Привет мир</Profile>
      <MyButton />
      <ProductList products={products} />
    </div>
  );
}

export default App;
