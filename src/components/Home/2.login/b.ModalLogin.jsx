import ModalLoginButtons from "./b1.ModalLoginButtons";
import ModalLoginFields from "./b2.ModalLoginFields";
import ModalLoginSubmit from "./b3.ModalLoginSubmit";

export default function ModalLogin(){
  return(
    <div class="fixed inset-0 w-full p-6 flex justify-center items-center rounded-md">
      <div class="w-1/2 h-[90%] bg-white p-5 mx-auto rounded-md  border-4 border-red-400">
        
        {/*  Sección de saludo */}
        <div id="modal-title" class="w-full h-[15%] bg-amber-300">
          <h2 class="text-2xl font-semibold">Hola de Nuevo!</h2>
          <p>Inicia sesión y entérate de todas nuestras novedades</p>
        </div>

        {/*  Contenido del modal */}
        <div id="modal-content" className="w-full h-[85%] bg-emerald-400">
          <form action="" id="form-edit" className="w-full h-full font-bold">
            <ModalLoginButtons/>

            <ModalLoginFields/>

            <ModalLoginSubmit/>
          </form>
        </div>

      </div>
    </div>
  );
}