import { useState } from "react";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import Footer from "../../components/Footer";
import ModalUser from "../../components/userCard/ModalUser";

export default function Home() {
  var [count, setCount] = useState(0);
  var [productsCart, setproductsCart] = useState([]);
  
  // Cantidades del carrito
  const [minUnits,setMinUnits] = useState(1); // Cantidad mínima de un mismo producto
  const [maxUnits,setMaxUnits] = useState(8); // Cantidad máxima de un mismo producto

  // Arreglo que almacena las cantidades unitarias a comprar
  // elegidas por el usuario en el carrito
  var [unitsPerProduct, setunitsPerProduct] = useState([]);

  // var [a, seta] = useState([{id:1,name:"primero"},{id:2,name:"segundo"},{id:3,name:"tercero"}]);

  // Función para determinar si el nuevo producto a añadir
  // ya se encuentra agregado al carrito
  const isRepeatedProduct = (newProduct) => {
    return productsCart.findIndex((product) => product.id === newProduct.id) >= 0? 
           true: false;
  };

  const addProductstoCart = (productData) => {
    setCount(count + 1);

    if (isRepeatedProduct(productData)) {
      const productUnits = unitsPerProduct.map((units, index) => {
        
        if (index === productsCart.findIndex((product) => product.id === productData.id && units < maxUnits)){
          return units + 1;
        } return units;
               
        // return index === productsCart.findIndex((product) => product.id === productData.id)? 
        // units + 1 : units;
      });

      setunitsPerProduct(productUnits);
      setproductsCart([...productsCart]);
    } else {
      setunitsPerProduct([...unitsPerProduct, 1]);
      setproductsCart([...productsCart, productData]);
    }
  };

  var [modalStatus, setModalStatus] = useState("close");
  const openUserModal = () => setModalStatus("open");
  const closeUserModal = () => setModalStatus("close");

  return (
    <>
      <ModalUser modalStatus={modalStatus} closeUserModal={closeUserModal} />

      <Header
        maxUnits={maxUnits}
        minUnits={minUnits}
        count={count}
        setCount={setCount}
        productsCart={productsCart}
        setProductsCart={setproductsCart}
        unitsPerProduct={unitsPerProduct}
        setunitsPerProduct={setunitsPerProduct}
        openUserModal={openUserModal}
      />

      <Filters onAddProduct={addProductstoCart} />

      <Footer />
    </>
  );
}
