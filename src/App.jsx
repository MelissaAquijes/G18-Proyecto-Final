
import AdvertisingBarHome from "./components/Home/1.advertising/AdvertisingBarHome";
import HeaderBarHome from "./components/Home/2.header/HeaderBarHome";
import NavigateBarHome from "./components/Home/3.navigate/NavigateBarHome";
import NavigateBarHome_mobile from "./components/Home/3.navigate/NavigateBarHome_mobile";
import Slider from "./components/Home/4.slider/Slider";
import Login from "./components/Home/2.header/2.1.Login/Login";


export default function App(){
  //const menuImages = require.context()
  return (
    
    // general container 
    <> 
      {/*Orange bar - top of webpage*/}
      <AdvertisingBarHome/>
      
      {/* Bar: Location + Wsp + LOGO + search + login + cart */}
      <HeaderBarHome/>

      {/* Navigate Bar - Store Categories*/}
      <hr className="my-2 mx-8 border"/> 
        <NavigateBarHome/>
      <hr className="my-2 mx-8 border"/> 
      


      {/* Slider -> Images carousel below navigate bar*/}
      <Slider/>



      {/* Aside de navegación en mobile */}
      <NavigateBarHome_mobile/>


      {/* MODAL */}
      <div id="modal" class="relative z-50 w-full">

        {/* Background oscuro del modal */}
        <div class="fixed inset-0 bg-black/60"></div>

        {/* Cuerpo del modal */}
        <div class="fixed inset-0 w-full p-6 flex justify-center items-center rounded-md">

          <div class="w-1/2 h-4/5 bg-white p-5 mx-auto rounded-md    border-4 border-red-400">
            {/*  Sección de saludo */}
            <div id="modal-title" class="w-full h-[15%] bg-amber-300">
              <h2 class="text-2xl font-semibold">Hola de Nuevo!</h2>
              <p>Inicia sesión y entérate de todas nuestras novedades</p>
            </div>

            {/*  Contenido del modal */}
            <div id="modal-content" className="w-full h-[85%] bg-emerald-400">
              <form action="" id="form-edit" className="w-full h-full">
                <section id="switchButtons" class="bg-orange-200 flex items-center w-full h-[10%]">
                  <a href="#" class="w-1/2 h-full p-[1.8%] border-4 flex justify-center items-center bg-orange-500">      
                    <button >Ingresar</button>
                  </a>

                  <a href="#" class="w-1/2 h-full p-[1.8%] border-4 flex justify-center items-center">
                    <button>Quiero unirme!</button>
                  </a>
                </section>

                <section id="fields" class="bg-gray-800 w-full h-[70%] py-[5%] flex flex-col justify-center gap-5">
                  <div id="emailField" class="w-full h-1/5 flex border-4 rounded-xl">  
                    <i class="fa-solid fa-at bg-rose-300 w-[10%] flex justify-center items-center rounded-l-[8px] border-r-4"></i>

                    <label for="email" class="bg-purple-200 w-[90%] h-full rounded-r-lg">
                      <input type="text" id="email" placeholder="Nombre de usuario / Correo electrónico" class="bg-emerald-300 w-full h-full p-[3%] rounded-r-lg outline-none"/>
                    </label>
                  </div>

                  <div id="pswdField" class="h-1/5 flex border-4 rounded-xl">
                    <i class="fa-solid fa-key bg-rose-300 w-[10%] flex justify-center items-center rounded-l-[8px] border-r-4"></i>

                    <label for="pwd" class="bg-yellow-200 w-[90%] h-full rounded-r-lg">
                      <input type="password" id="pswd" placeholder="Contraseña" class="bg-emerald-300 w-full h-full p-[3%] rounded-r-lg outline-none"/>
                    </label>
                  </div>
                </section>

                <section id="submitAll" class="bg-blue-400 w-full h-1/5">
                  <div class="border-4 h-2/5 text-sm flex items-center justify-between">
                    <div>
                      <input type="checkbox" id="acceptTerms" class="mx-1"/>
                      <span>Recordar</span>
                    </div>

                    <a href="#" class="hover:text-blue-600 hover:underline">
                      Olvidé mi contraseña
                    </a>
                  </div>
                  
                  <button class="border-4 w-full h-3/5 hover:bg-emerald-700 hover:text-white">Ingresar</button>
                </section>

              </form>
            </div>
          </div>

        </div>
      </div>
      




    </>//end general container
  );
}








