import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { setCartProductsArray, 
         setCartUnitsArray,
         setCartTotalPrice } from "../../app/slices/cartProductsData";

export default function Header(props){
  const dispatch = useDispatch();

  // VARIABLES GLOBALES
  // Formato del botón pagar
  const cartPayButtColor = useSelector((state)=>state.cartPayButtonFormat.buttonColor);
  const cartPayButtBorder = useSelector((state)=>state.cartPayButtonFormat.borderColor);
  const cartPayButtHover = useSelector((state)=>state.cartPayButtonFormat.hoverFormat);



  // DATOS DE LOS PRODUCTOS: MODELO + PRECIO
  const cartRenderProducts = useSelector((state)=>state.cartProductsData.cartProductsArray);
  const cartRenderUnits = useSelector((state)=>state.cartProductsData.cartUnitsArray);
  const cartTotalPrice = useSelector((state)=>state.cartProductsData.cartTotalPrice);
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



  // const [active, setActive] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  // Status:   True = Open  -  False = Close
  var [cartStatus, setCartStatus] = useState(false);
  const openCart = () => setCartStatus(true);
  const closeCart = () => setCartStatus(false);


  // Eliminar productos del carrito
  const  removeProductFromCart = (index) => {
    const updatedCart = props.productsCart.filter((_, i) => i !== index); //metodo filter primer parametro ignoramos
    props.setProductsCart(updatedCart);
    handleCartRenderProducts(updatedCart);

    // Primero actualiza la cuenta del carrito
    const updatedCount = props.count - props.unitsPerProduct[index];
    props.setCount(updatedCount);

    // Luego elimina el elemento
    const updatedproductUnits = props.unitsPerProduct.filter((_,i)=> i !== 
    index); // borra el elemento del array de unidades
    props.setunitsPerProduct(updatedproductUnits);
    handleCartRenderUnits(updatedproductUnits);
  };


  // var [productUnits, setProductUnits] = useState(1);

  const maxLimitPerProductMessage = (units) => {
    if(units >= props.maxUnits) {
      return (
        <div className="h-1/5 font-bold text-xs text-red-700 mt-1">
          <p>Cantidad máxima de productos</p>
        </div>
      );
    }
  }
 
  const incrementProductUnits = (productUnits,indexProd) => {
    const updatedUnits = props.unitsPerProduct.map((units, index) => {
      if (index === indexProd && productUnits < props.maxUnits){
        props.setCount(props.count+1);
        return units + 1;
      } return units; 
    });
    handleCartRenderUnits(updatedUnits);
    return props.setunitsPerProduct(updatedUnits);
  }

  const decrementProductUnits = (productUnits,indexProd) => {
    const updatedUnits = props.unitsPerProduct.map((units, index) => {
      if (index === indexProd && productUnits > props.minUnits){
        props.setCount(props.count-1);
        return units - 1;
      } return units; 
    });
    handleCartRenderUnits(updatedUnits);
    return props.setunitsPerProduct(updatedUnits);  
  }

  // Render Products
  const productsToRenderInCart = props.productsCart.map((product, index) => {
    
      return (
        <li key={product.id} className="flex flex-col h-[35%] mb-1">
          <div className="flex h-4/5">
            <div className="flex flex-col w-[15%] h-full justify-center gap-2 items-center">
              <button onClick={()=>incrementProductUnits(props.unitsPerProduct[index],index)} className="w-3/5 h-[20%] flex justify-center items-center border rounded-xl bg-gray-200 hover:bg-peach">
                <i className="fa-solid fa-angle-up"></i>
              </button>

              <p className="w-3/5 bg-white border text-center rounded-md">{props.unitsPerProduct[index]}</p>

              <button onClick={()=>decrementProductUnits(props.unitsPerProduct[index],index)} className="w-3/5 h-[20%] flex justify-center items-center border rounded-xl bg-gray-200 hover:bg-peach">
                <i className="fa-solid fa-angle-down"></i>
              </button>
            </div>
              
            <div  className="flex w-[85%] h-full items-center justify-between mb-2">
              <img
                className="h-4/5 rounded-md border border-gray-200"
                src={product.image}
                alt={product.title}
              />
    
              <div className="flex flex-col h-full justify-center text-right items-end">
                <button className="" onClick={() => removeProductFromCart(index)}>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
                <div className="flex flex-col items-end">
                  <p className="">{product.title} {index}</p>
                  <span className="">S/.{product.price}</span>
                </div>
              </div>
            </div>  
          </div>

          {maxLimitPerProductMessage(props.unitsPerProduct[index])}   
          
        </li> 
      )}
    
    
  )

  const renderCartProducts = (value) => {
    return (value === 0)? (<p>Tu carrito aún no tiene productos. </p>) :  productsToRenderInCart;
  }

  // const cartRenderProducts = useSelector((state)=>state.cartProductsData.cartProductsArray);
  // const cartRenderUnits = useSelector((state)=>state.cartProductsData.

  //CÁLCULO DEL PRECIO TOTAL
  const calculateTotalPrice = () => {
    // const total = props.productsCart.reduce((accumulator, product) => accumulator + product.price, 0);
    // setTotalPrice(total);

    handleCartTotalPrice(cartRenderProducts.reduce((accumulator, nextProduct) => accumulator + nextProduct.price*cartRenderUnits[cartRenderProducts.findIndex((elem)=>elem.id === nextProduct.id)], 0));
    setTotalPrice(cartTotalPrice); 
  };

  useEffect(() => {
    //usamos UseEffect para que automáticamente corra la funcion cuando algo se modifica en [productCart]
    calculateTotalPrice();
  }, [cartRenderUnits]);


  const handlePagar = () => {
    console.log(cartRenderProducts,cartRenderUnits,cartTotalPrice);
  }

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
          <aside className={`${cartStatus? "" : "hidden"} bg-bmint flex flex-col w-[30%] h-full absolute right-0 top-0 justify-between`}>

            {/* HEADER DEL CARRITO DESPLEGADO */}
            <div className="flex justify-between h-[10%] p-4 border-4 border-yellow-500">
              <h3 className="flex items-center">Mis Productos</h3>
              <span className="bg-pink rounded-full w-10 h-10 text-center text-2xl text-white">{props.count}</span>

              {/* botón cerrar del cart desplegado  bg-slate-200*/}
              <button className="w-8 h-8 p-1 rounded-2xl bg-bpink hover:bg-pink flex items-center justify-center"
                      onClick={closeCart}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>


            {/* LISTADO DE PRODUCTOS EN EL CARRITO DESPLEGADO */}
            <div className="flex justify-between h-[70%] p-5 border-4 border-black overflow-auto">
              <ul className="my-1 w-full divide-y-4 divide-gray-200">
                {renderCartProducts(props.count)}
              </ul>
            </div>


            {/* FOOTER DEL CARRITO DESPLEGADO */}
            <div className="flex flex-col h-[20%] justify-between p-4 border-4 border-yellow-500">
              <div className="font-bold border-4"> TOTAL: S/.{cartTotalPrice}</div>
              <div className="font-bold">
                <a href="#" target=""><button onClick={handlePagar} className={"w-full p-2 rounded-xl text-xl".concat(cartPayButtColor,cartPayButtBorder,cartPayButtHover)}>PAGAR</button></a>
              </div>
              
            </div>

          </aside>

        </div>
      </header>
    </>
  );
}