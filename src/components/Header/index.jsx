import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

export default function Header({
  count,
  setCountUser,
  productsCart,
  setProductsCart,
}) {
  const [active, setActive] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const removeProductFromCart = (index) => {
    const updatedCart = productsCart.filter((_, i) => i !== index); //metodo filter primer parametro ignoramos
    setProductsCart(updatedCart);
    setCountUser(count - 1);
  };

  const calculateTotalPrice = () => {
    const total = productsCart.reduce(
      (accumulator, product) => accumulator + product.price,
      0
    );
    setTotalPrice(total);
  };

  useEffect(() => {
    //usamos UseEffect para que automaticamente corra la funcion cuando algo se modifica en [productCart]
    calculateTotalPrice();
  }, [productsCart]);

  return (
    <>
      <header className="bg-white w-full relative">
        <p className="bg-blue text-white p-2 text-center text-sm">
          Envíos gratis a Lima y Provincia por compras superiores a S/120.
        </p>

        <div className="w-full p-3 flex justify-between items-center">
          <i className="text-pink fa-solid fa-bars fa-2xl cursor-pointer"></i>

          <a href="#">
            <img className="w-[120px]" src={logo} />
          </a>

          <div className="relative">
            <i className="text-blue fa-regular fa-user fa-lg cursor-pointer"></i>
            <i
              className="text-blue relative ml-4 fa-solid fa-cart-shopping fa-lg cursor-pointer"
              onClick={() => setActive(!active)}
            >
              <span className="bg-pink rounded-full w-4 text-center text-xs text-white absolute bottom-1 left-3">
                {count}
              </span>
            </i>

            <div
              className={`${
                active
                  ? "hidden"
                  : "bg-white w-[550px]  right-0 vh-full absolute"
              }`}
            >
              <div className="flex justify-between p-4">
                <h3 className="font-bold">Mis compras</h3>
                <i
                  class="fa-solid fa-xmark cursor-pointer"
                  onClick={() => setActive(!active)}
                ></i>
              </div>

              <ul className="-my-6 divide-y divide-gray-200 mt-4">
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
                        <div className="text-base font-medium text-gray-900">
                          <p>{product.title}</p>
                          <p>S/.{product.price}</p>
                        </div>

                        <button
                          className=""
                          onClick={() => removeProductFromCart(index)}
                        >
                          <i className="text-pink fa-solid fa-trash-can"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between border-t font-medium text-gray-900 border-gray-200 px-4 py-6 sm:px-6">
                <p>Total</p>
                <p> S/.{totalPrice}</p>
              </div>

              <a
                className="flex items-center justify-center rounded-md border border-transparent bg-blue px-6 py-3 font-medium text-white shadow-sm hover:bg-pink"
                src="#"
              >
                Pagar
              </a>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}
