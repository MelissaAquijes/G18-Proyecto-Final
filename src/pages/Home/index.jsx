import { useState } from "react";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import Footer from "../../components/Footer";
import ModalUser from "../../components/userCard/ModalUser";


export default function Home() {
  var [count, setCount] = useState(0);
  var [productsCart, setproductsCart] = useState([]);

  // Arreglo que almacena las cantidades unitarias a comprar
  // elegidas por el usuario en el carrito
  var [repeatedProductIndex, setRepeatedProductIndex] = useState(0);
  var [unitsPerProduct, setunitsPerProduct] = useState([]);

  // var [a, seta] = useState([{id:1,name:"primero"},{id:2,name:"segundo"},{id:3,name:"tercero"}]);

  // Función para determinar si el nuevo producto a añadir
  // ya se encuentra agregado al carrito
  const isRepeatedProduct = (newProduct) => {
    
    const verifyProductsInCart = productsCart.filter((product)=> product.id === newProduct.id);
    
    if (verifyProductsInCart.length > 0) {
      setRepeatedProductIndex(productsCart.findIndex((product)=> product.id === newProduct.id));
      console.log("if de repetición", repeatedProductIndex, verifyProductsInCart);
      return true;
    }
    console.log("else de repetición");
    return false;     
  }

  const addProductstoCart = (productData) => {
    setCount(count+1);
    
    if(isRepeatedProduct(productData)) { 
      setproductsCart([...productsCart]);
      
      const productUnits = unitsPerProduct.map((price,index)=>{
        if(index === repeatedProductIndex) {
          return price + 1;
        } else {
          return price;
        }  
      })

      setunitsPerProduct(productUnits);
      console.log("Esto es el if de addProducts");
      console.log(productUnits);
    } 
    else {
      console.log("Esto es el else de addProducts");
      setproductsCart([...productsCart,productData]);
      setunitsPerProduct([...unitsPerProduct,1]);
      console.log(unitsPerProduct);
    }
  };

  var [modalStatus, setModalStatus] = useState("close");
  const openUserModal = () => setModalStatus("open");
  const closeUserModal = () => setModalStatus("close");

  return (
    <>

      <ModalUser modalStatus={modalStatus} closeUserModal={closeUserModal}/>

      <Header
        count={count}
        productsCart={productsCart}
        setProductsCart={setproductsCart}
        setCountUser={setCount}
        unitsPerProduct={unitsPerProduct}
        openUserModal={openUserModal}/>


      <Filters onAddProduct={addProductstoCart}/> 



      <Footer/>
    </>
  );
}
