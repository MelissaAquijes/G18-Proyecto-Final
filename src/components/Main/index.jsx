import { useSelector, useDispatch  } from "react-redux";

import { addition } from "../../app/slice/counterSlice";

export default function Main(){
  //const menuImages = require.context()

    const counter = useSelector (function (state){
      return state.counter.value;
    });

    const dispatch = useDispatch ();

    return (
      <>
     <main className="m-auto">
      <div className="flex justify-center mt-10">
        <h2 className="w-40 text-white font-bold  px-10 py-4 rounded-md bg-teal-400 hover:bg-sky-600 flex justify-center">Zona sale</h2>
      </div>
      <div className=" grid grid-cols-3 max-md:grid-cols-2 xl:grid-cols-4 gap-5 p-10 ">
        <div className="bg-gray rounded-lg  hover:shadow-lg  ">
          <div className="overflow-hidden">
          <img className="w-100% h-300px objet-cover rounded-t-lg hover:scale-[1.1] delay-500" src="src\assets\images\photo.jpg" alt=""/> 
          </div>
           <div className="p-6 flex flex-col gap-3">
            <h2 className="">Ropa</h2>
            <p className="font-bold">$80</p>
            <button onClick={() => dispatch(addition())}  className="border-none text-white bg-black p-3 rounded-lg cursor-pointer">  
             Añadir al carrito   
            </button>
          </div>
        </div>
        <div className="bg-gray rounded-lg  hover:shadow-lg  ">
          <div className="overflow-hidden">
            <img className="w-100% h-300px objet-cover rounded-t-lg hover:scale-[1.1] delay-500" src="src\assets\images\photo.jpg" alt=""/>
          </div>
           <div className="p-6 flex flex-col gap-3">
            <h2 className="">Ropa</h2>
            <p className="font-bold">$80</p>
            <button onClick={() => dispatch(addition())} className="border-none text-white bg-black p-3 rounded-lg cursor-pointer">  
              Añadir al carrito
            </button>
          </div>
        </div>
        <div className="bg-gray rounded-lg  hover:shadow-lg  ">
          <div className="overflow-hidden">
            <img className="w-100% h-300px objet-cover rounded-t-lg hover:scale-[1.1] delay-500" src="src\assets\images\photo.jpg" alt=""/>
          </div>
           <div className="p-6 flex flex-col gap-3">
            <h2 className="">Ropa</h2>
            <p className="font-bold">$80</p>
            <button onClick={() => dispatch(addition())} className="border-none text-white bg-black p-3 rounded-lg cursor-pointer">  
              Añadir al carrito
            </button>
          </div>
        </div>
        <div className="bg-gray rounded-lg  hover:shadow-lg  ">
          <div className="overflow-hidden">
            <img className="w-100% h-300px objet-cover rounded-t-lg hover:scale-[1.1] delay-500" src="src\assets\images\photo.jpg" alt=""/>
          </div>
           <div className="p-6 flex flex-col gap-3">
            <h2 className="">Ropa</h2>
            <p className="font-bold">$80</p>
            <button onClick={() => dispatch(addition())} className="border-none text-white bg-black p-3 rounded-lg cursor-pointer">  
              Añadir al carrito
            </button>
          </div>
        </div>
        <div className="bg-gray rounded-lg  hover:shadow-lg  ">
          <div className="overflow-hidden">
            <img className="w-100% h-300px objet-cover rounded-t-lg hover:scale-[1.1] delay-500" src="src\assets\images\photo.jpg" alt=""/>
          </div>
           <div className="p-6 flex flex-col gap-3">
            <h2 className="">Ropa</h2>
            <p className="font-bold">$80</p>
            <button onClick={() => dispatch(addition())} className="border-none text-white bg-black p-3 rounded-lg cursor-pointer">  
              Añadir al carrito
            </button>
          </div>
        </div>
        <div className="bg-gray rounded-lg  hover:shadow-lg  ">
          <div className="overflow-hidden">
            <img className="w-100% h-300px objet-cover rounded-t-lg hover:scale-[1.1] delay-500" src="src\assets\images\photo.jpg" alt=""/>
          </div>
           <div className="p-6 flex flex-col gap-3">
            <h2 className="">Ropa</h2>
            <p className="font-bold">$80</p>
            <button onClick={() => dispatch(addition())} className="border-none text-white bg-black p-3 rounded-lg cursor-pointer">  
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center  ">
        <button className=" w-40 text-white font-bold  px-3 py-2 rounded-md bg-teal-400 hover:bg-sky-600">
            Ver Mas
        </button>
      </div>
     </main>
      </>
    );
  }