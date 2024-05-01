//import { Header } from "../Header";


export default function Header (){


  function Open(){
    document.querySelector('.sidebar').classNameList.toggle('left-[-300px]');
  }

  return (
    <> 
    <nav className=" flex justify-between items-center p-5 w-[100%] mx-auto">
        <img 
        className="cursor-pointer lg:hidden h-6 pr-20" 
        id="imageButton" 
        src="src\assets\icons\menu-outline.svg" 
        alt="" 
        onclick="Open()" 
        />

        <div className="flex flex-row pl-10 gap-5">
          <div className="flex h-5 max-lg:hidden">
          <img className="px-2" src="src\assets\icons\location-outline.svg" alt="" />
            <a className="hover:text-gray-300" href="">tienda</a>
          </div>
          <div className="flex h-5 max-lg:hidden">
            <img className="px-2" src="src\assets\icons\logo-whatsapp.svg" alt="" />
            <a className="hover:text-gray-300" href="">993607786</a>
          </div>
        </div>
        <div>
          <img className="md:w-50" src="src\assets\images\logo.png" alt="" />
        </div>
        <div className="flex gap-5 h-7 text-center px-10 cursor-pointer">
          <img className="" src="src\assets\icons\search-outline.svg" alt=""/>
          <img src="src\assets\icons\person-outline.svg" alt=""/>
          <img src="src\assets\icons\bag-outline.svg" alt="" />
        </div>
      </nav>

      <form action="">
          <div className="nav-links flex min-h-fit xl-min-fit min-h-[60vh] left-0 max-lg:hidden md:w-auto w-full items-center px-5">
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
        className="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
      >
            <div className=" flex justify-between ">
              <h1 className="font-bold text-gray-200 text-[30px] ml-3">Wawita</h1>
            <img className="h-5 fill-white " onclick="Open()"  src="src\assets\icons\close-outline.svg" alt=""/>
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