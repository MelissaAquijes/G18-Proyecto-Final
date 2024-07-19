import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

export default function Header({ count, setCountUser, productsCart, setProductsCart, openUserModal }){

  const [active, setActive] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const removeProductFromCart = (index) => {
    const updatedCart = productsCart.filter((_, i) => i !== index); //metodo filter primer parametro ignoramos
    setProductsCart(updatedCart);
    setCountUser(count - 1);
  };

  const calculateTotalPrice = () => {
    const total = productsCart.reduce((accumulator, product) => accumulator + product.price, 0);
    setTotalPrice(total);
  };

  const closeCart = () => {

  }

  useEffect(() => {
    //usamos UseEffect para que automaticamente corra la funcion cuando algo se modifica en [productCart]
    calculateTotalPrice();
  }, [productsCart]);

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

          <div className="relative flex w-[100px] h-[40px]">
            {/* user icon*/}
            <div className="w-1/2 flex justify-center items-center">
              <button onClick={openUserModal}>
                <i className="text-blue fa-regular fa-user fa-lg"></i>
              </button>
            </div>

            {/* cart icon*/}
            <div className="w-1/2 flex justify-center items-center">
              <button onClick={() => setActive(!active)}>
                <i className="text-blue relative fa-solid fa-cart-shopping fa-lg">
                  <span className="bg-pink rounded-full w-4 text-center text-xs text-white absolute bottom-1 left-3">{count}</span>
                </i>
              </button>
            </div>

            {/* cart desplegado */}
            <div className={`${active? "hidden" : "bg-white w-[850px]  right-8 top-7 overflow-hidden absolute"}`}>
              <div className="flex justify-between p-4 border-4 border-black">
                <h3>Mis compras</h3>
                {/* botón cerrar del cart desplegado */}
                <button className="w-8 h-8 p-1 rounded-2xl bg-slate-200 hover:bg-bpink flex items-center justify-center"
                        onClick={() => setActive(!active)}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              <div>
                <ul className="-my-6 divide-y divide-gray-200 mt-1 border-4 border-green-500">
                {productsCart.map((product, index) => (
                  <li className="flex py-6">
                    <div
                      key={index}
                      className="w-full h-28 mb-2 flex justify-between"
                    >
                      <img
                        className="h-full rounded-md border border-gray-200"
                        src={product.image}
                        alt={product.title}
                      />

                      <div className="flex flex-col justify-between text-right items-end">
                        <button
                          className=""
                          onClick={() => removeProductFromCart(index)}
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                        <div>
                          <p>{product.title}</p>
                          <span>S/.{product.price}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                    
                  ))}
                </ul>
              </div>

              <span className="font-bold"> TOTAL: S/.{totalPrice}</span>
              <button>Pagar</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}