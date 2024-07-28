import { useState } from "react";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import Footer from "../../components/Footer";
import ModalUser from "../../components/userCard/ModalUser";

export default function Home() {
  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  const addProductstoCart = (productData) => {
    setCount(count + 1);

    if (cartProducts.length === 0) {
      setCartProducts(cartProducts.push(productData));
    }
    setCartProducts([...cartProducts, productData]);
    console.log(cartProducts);
  };

  var [modalStatus, setModalStatus] = useState("close");
  const openUserModal = () => setModalStatus("open");
  const closeUserModal = () => setModalStatus("close");

  return (
    <>
      <ModalUser modalStatus={modalStatus} closeUserModal={closeUserModal} />

      <Header
        count={count}
        productsCart={cartProducts}
        setProductsCart={setCartProducts}
        setCountUser={setCount}
        openUserModal={openUserModal}
      />

      <Filters onAddProduct={addProductstoCart} />

      <Footer />
    </>
  );
}
