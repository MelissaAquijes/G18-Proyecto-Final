export default function MenuBar (){
  return (
    <> 
     <form action="">
     <div class="nav-links flex min-h-fit xl-min-fit min-h-[60vh] left-0 max-lg:hidden md:w-auto w-full items-center px-5">
        <div class=" flex md:flex-row justify-center border md:w-full ">
          <ul class="flex md:flex-row items-center md:gap-[4vw] p-5 ">
            <li><button class="hover:text-gray-300"> Bebe </button></li>
            <li><button class="hover:text-gray-300"> Beba </button></li>
            <li><button class="hover:text-gray-300"> Niña </button></li>
            <li><button class="hover:text-gray-300"> Niño </button></li>
            <li><button class="hover:text-gray-300"> Mayoral </button></li>
            <li><button class="hover:text-gray-300"> Accesorio </button></li>
            <li><button class="hover:text-gray-300"> SET </button></li>
            </ul>
          </div >
        </div>

        <section class="">
          <div class="slider ">
            <div class="sliderInner flex flex-row flex-nowrap xl-auto">
              <img src="src\assets\images\image1.png" alt="" />
              <img src="src\assets\images\image2.png" alt="" />
              <img src="src\assets\images\image3.png" alt="" />
              <img src="src\assets\images\image4.png" alt="" />
            </div>
          </div>
        </section>

        <section class=" bg-[gray] absolute top-0 h-[100%] opacity-80 lg:hidden">
          <div
        class="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
      >
            <div class=" flex justify-between ">
              <h1 class="font-bold text-gray-200 text-[30px] ml-3">Wawita</h1>
            <img class="h-5 fill-white " onclick="Open()"  src="src\assets\icons\close-outline.svg" alt=""/>
            </div>
            <div>
              <div class="p-3 mt-3 flex items-center rounded-md px-2 cursor-pointer bg-gray-700 text-white">
                <img class="h-5" src="./assets/icons/search-outline.svg" alt=""/>
                <input
                  type="text"
                  placeholder="Search"
                  class="text-[15px] ml-3 w-full bg-transparent focus:outline-none "
                />
              </div>
            </div>
            <hr class="my-2" />
            <div class="flex flex-col ml-0  text-gray-200  ">
              <div class="p-2"><button class="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">Bebe</button></div>
              <div class="p-2"><button class="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">Beba</button></div>
              <div class="p-2"><button class="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">Niña</button></div>
              <div class="p-2"><button class="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">Niño</button></div>
            </div>
            <hr class="my-2 " />
            <div class="flex flex-col ml-0  text-gray-200  ">
              <div class="p-2"><button class="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">Mayoral</button></div>
              <div class="p-2"><button class="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">Accesorios</button></div>
            </div>
            <hr class="my-2 p-4" />
            <div class="flex justify-center align-row text-gray-200 hover:bg-gray-600 rounded-lg duration-300 p-3">
              <img class="h-5" src="src\assets\icons\log-out-outline.svg" alt=""/>
              <button class="  px-6">LogOut</button>
            </div>
          </div>
        </section>
     </form>
    </>
  );
}