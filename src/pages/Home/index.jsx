import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import Footer from "../../components/Footer";
import ModalUser from "../../components/userCard/ModalUser";
import { useSelector, useDispatch } from "react-redux";
import { setCartProductsArray, 
         setCartUnitsArray,
         setCartTotalPrice,
         setCartTotalUnits } from "../../app/slices/cartProductsData";

export default function Home() {
  const dispatch = useDispatch();
  
  var [count, setCount] = useState(0);
  var [productsCart, setproductsCart] = useState([]);


  // DATOS DE LOS PRODUCTOS: MODELO + PRECIO
  const cartRenderProducts = useSelector((state)=>state.cartProductsData.cartProductsArray);
  const cartRenderUnits = useSelector((state)=>state.cartProductsData.cartUnitsArray);
  const cartTotalPrice = useSelector((state)=>state.cartProductsData.cartTotalPrice);
  const cartTotalUnits = useSelector((state)=>state.cartProductsData.cartTotalUnits);
  // Uso de reducers para el renderizado del resumen de compra
  const handleCartRenderProducts = (array) => {
    dispatch(setCartProductsArray(array));
  };

  const handleCartRenderUnits = (array) => {
    dispatch(setCartUnitsArray(array));
  };

  const handleCartTotalPrice = (totalPrice) => {
    dispatch(setCartTotalPrice(totalPrice));
  };

  const handleCartTotalUnits = (totalUnits) => {
    dispatch(setCartTotalUnits(totalUnits));
  };


  const calculateTotalPrice = () => {
    handleCartTotalPrice(cartRenderProducts.reduce((accumulator, nextProduct) => accumulator + nextProduct.price*cartRenderUnits[cartRenderProducts.findIndex((elem)=>elem.id === nextProduct.id)], 0));
  };

  // Cálculo del total de unidades
  const calculateTotalUnits = () => {
    handleCartTotalUnits(cartRenderUnits.reduce((accumulator, nextProduct) => accumulator + nextProduct, 0));
  };


  useEffect(() => {
    //usamos UseEffect para que automáticamente corra la funcion cuando algo se modifica en [cartRenderUnits]
    calculateTotalPrice();
    calculateTotalUnits();
  }, [cartRenderUnits]);

  // Cantidades del carrito
  const [minUnits,setMinUnits] = useState(1); // Cantidad mínima de un mismo producto
  const [maxUnits,setMaxUnits] = useState(8); // Cantidad máxima de un mismo producto

  // Arreglo que almacena las cantidades unitarias a comprar
  // elegidas por el usuario en el carrito
  var [unitsPerProduct, setunitsPerProduct] = useState([]);


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
        
        if (index === productsCart.findIndex((product) => product.id === productData.id) && units < maxUnits){
          return units + 1;
        } return units;
               
      });

      setunitsPerProduct(productUnits);
      handleCartRenderUnits(productUnits);
      setproductsCart([...productsCart]);
      handleCartRenderProducts([...productsCart]);
      console.log(productsCart,cartRenderUnits,cartTotalPrice);
    } else {
      setunitsPerProduct([...unitsPerProduct, 1]);
      handleCartRenderUnits([...unitsPerProduct, 1]);
      setproductsCart([...productsCart, productData]);
      handleCartRenderProducts([...productsCart, productData]);
      console.log(cartRenderProducts,unitsPerProduct,cartTotalPrice);
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