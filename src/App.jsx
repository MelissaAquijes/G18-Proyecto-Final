import { useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  const addProductstoCart = (productData) => {
    setCount(count + 1);
    setCartProducts([...cartProducts, productData]);
  };

  return (
    <>
      <Header
        count={count}
        productsCart={cartProducts}
        setProductsCart={setCartProducts}
        setCountUser={setCount}
      />
      <Filters
        onAddProduct={addProductstoCart}
      />
      <Footer />
    </>
  );
}

export default App;

