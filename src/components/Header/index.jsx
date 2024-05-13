import { useSelector } from "react-redux";
import { useState } from "react"; 
//import NavBar from "./NavBar"
//se agrega
//import { SideBar } from "./SideBar"

export default function Header (){
  const value = useSelector((state) => state.counter.value);

  function Open(){
    document.querySelector('.sidebar').classList.toggle('left-[-300px]');
  }

  return (
    <> 
    <header className="bg-white w-full">
      <p className="bg-blue text-white p-2 text-center text-sm">
        Envíos gratis a Lima y Provincia por compras superiores a S/120.
      </p>

      <div className="w-full p-3 flex justify-between items-center ">
       <a className="md:hidden" href="">
        <i className="text-pink fa-solid fa-bars fa-2xl cursor-pointer "></i>
      </a>
        <a href="#" className="flex items-center">
          <img className="w-[120px]" src= "src\assets\images\logo.png" />
        </a>

        <div>
          <i className="text-blue fa-solid fa-magnifying-glass"></i>
          <i className="text-blue ml-4 fa-regular fa-user fa-lg"></i>
          <i className="text-blue ml-4 fa-solid fa-cart-shopping fa-lg">{value}</i>
        </div>
      </div>
    </header> 
    <form action="">
          <div className="nav-links flex min-h-fit xl-min-fit left-0 max-md:hidden md:w-auto w-full items-center px-5">
            <div className=" flex md:flex-row justify-center border md:w-full ">
              <ul className="flex md:flex-row items-center md:gap-[4vw] p-5 ">
              <li><button className="hover:text-gray-300"> Bebe </button></li>
              <li><button className="hover:text-gray-300"> Beba </button></li>
              <li><button className="hover:text-gray-300"> Niña </button></li>
              <li><button className="hover:text-gray-300"> Niño </button></li>
              <li><button className="hover:text-gray-300"> Mayoral </button></li>
              <li><button className="hover:text-gray-300"> Accesorio </button></li>
              <li><button className="hover:text-gray-300"> SET </button></li>
              </ul>
            </div >
          </div>

        <section className=" bg-[gray] absolute top-0 h-[100%] opacity-80 lg:hidden">
          <div
        className="sidebar fixed top-0 bottom-0 lg:left-0   p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
      >
            <div className=" flex justify-between ">
              <h1 className="font-bold text-gray-200 text-[30px] ml-3">Wawita</h1>
            <img className="h-5 fill-white "  src="src\assets\icons\close-outline.svg" alt=""/>
            </div>
            <div>
              <div className="p-3 mt-3 flex items-center rounded-md px-2 cursor-pointer bg-gray-700 text-white">
                <img className="h-5" src="src\assets\icons\search-outline.svg" alt=""/>
                <input
                  type="text"
                  placeholder="Search"
                  className="text-[15px] ml-3 w-full bg-transparent focus:outline-none "
                />
              </div>
            </div>
            <hr className="my-2" />
            <div className="flex flex-col ml-0  text-gray-200  ">
              <div className="p-2"><button className="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">Bebe</button></div>
              <div className="p-2"><button className="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">Beba</button></div>
              <div className="p-2"><button className="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">Niña</button></div>
              <div className="p-2"><button className="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">Niño</button></div>
            </div>
            <hr className="my-2 " />
            <div className="flex flex-col ml-0  text-gray-200  ">
              <div className="p-2"><button className="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">Mayoral</button></div>
              <div className="p-2"><button className="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">Accesorios</button></div>
            </div>
            <hr className="my-2 p-4" />
            <div className="flex justify-center align-row text-gray-200 hover:bg-gray-600 rounded-lg duration-300 p-3">
              <img className="h-5" src="src\assets\icons\log-out-outline.svg" alt=""/>
              <button className="  px-6">LogOut</button>
            </div>
          </div>
        </section>
      </form>

    </>
  );
}