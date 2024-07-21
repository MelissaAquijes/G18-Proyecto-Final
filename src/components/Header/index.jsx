import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

export default function Header(props){

  // const [active, setActive] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  // Status:   True = Open  -  False = Close
  var [cartStatus, setCartStatus] = useState(false);
  const openCart = () => setCartStatus(true);
  const closeCart = () => setCartStatus(false);


  // Render Products
  const productsToRenderInCart = props.productsCart.map((product, index) => (
        <li className="flex py-6">
          <div key={index} className="w-full h-28 mb-2 flex justify-between">
            <img
              className="h-full rounded-md border border-gray-200"
              src={product.image}
              alt={product.title}
            />
  
            <div className="flex flex-col justify-between text-right items-end">
              <button className="" onClick={() => removeProductFromCart(index)}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
              <div>
                <p>{product.title}</p>
                <span>S/.{product.price}</span>
              </div>
            </div>
          </div>
        </li> 
      ))
  
  const renderCartProducts = (value) => {
    return (value === 0)? (<p>Tu carrito aún no tiene productos. </p>) :  productsToRenderInCart;
  }


  const  removeProductFromCart = (index) => {
    const updatedCart = props.productsCart.filter((_, i) => i !== index); //metodo filter primer parametro ignoramos
    props.setProductsCart(updatedCart);
    props.setCountUser(props.count - 1);
  };

  const calculateTotalPrice = () => {
    const total = props.productsCart.reduce((accumulator, product) => accumulator + product.price, 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    //usamos UseEffect para que automaticamente corra la funcion cuando algo se modifica en [productCart]
    calculateTotalPrice();
  }, [props.productsCart]);




  return (
    <>
      <header className="bg-white w-full">
        <p className="bg-blue text-white p-2 text-center text-sm">
          Envíos gratis a Lima y Provincia por compras superiores a S/120.
        </p>

        <div className="w-full p-3 flex justify-between items-center">
          <i className="text-pink fa-solid fa-bars fa-2xl cursor-pointer"></i>

          {/* Logo de la página */}
          <a href="#">
            <img className="w-[120px] " src={logo} />
          </a>

          {/* Zona de íconos - user + cart */}
          <div className="relative flex w-[100px] h-[40px] border-4 border-peach">
            
            {/* user icon*/}
            <div className="w-1/2 flex justify-center items-center">
              <button onClick={props.openUserModal}>
                <i className="text-blue fa-regular fa-user fa-lg"></i>
              </button>
            </div>


            {/* cart icon*/}
            <div className="w-1/2 flex justify-center items-center">
              <button onClick={openCart}>
                <i className="text-blue relative fa-solid fa-cart-shopping fa-lg">
                  <span className="bg-pink rounded-full w-4 text-center text-xs text-white absolute bottom-1 left-3">{props.count}</span>
                </i>
              </button>
            </div>

          </div>

          {/* Cart desplegado */}
          <div className={`bg-bmint w-[30%] h-full right-0 top-0 overflow-hidden absolute ${cartStatus? "" : "hidden"}`}>

            {/* HEADER DEL CARRITO DESPLEGADO */}
            <div className="flex justify-between p-4 border-4 border-black">
              <h3>Mis Productos</h3>
              {/* botón cerrar del cart desplegado  bg-slate-200*/}
              <button className="w-8 h-8 p-1 rounded-2xl bg-bpink hover:bg-pink flex items-center justify-center"
                      onClick={closeCart}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>


            {/* LISTADO DE PRODUCTOS EN EL CARRITO DESPLEGADO */}
            <div className="flex justify-between p-4 border-4 border-black">
              <ul className="my-1 w-full divide-y divide-gray-200 border-4 border-red-500">
                {renderCartProducts(props.count)}
              </ul>
            </div>



            {/* FOOTER DEL CARRITO DESPLEGADO */}
            <div className="flex justify-between p-4 border-4 border-black">
              <span className="font-bold"> TOTAL: S/.{totalPrice}</span>
              <button>Pagar</button>
            </div>

          </div>

            

        </div>
      </header>
    </>
  );
}