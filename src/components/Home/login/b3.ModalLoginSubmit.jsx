export default function ModalLoginSubmit(){
  return(
    <section id="submitAll" class="bg-blue-400 w-full h-1/5">
      <div class="border-4 h-2/5 text-sm flex items-center justify-between px-2">
        <div>
          <input type="checkbox" id="acceptTerms" class="mx-1"/>
          <span>Recordar</span>
        </div>

        <a href="#" class="hover:text-blue-600 hover:underline">
          Olvidé mi contraseña
        </a>
      </div>
      
      <button class="border-4 w-full h-3/5 font-bold bg-violet-500 hover:bg-emerald-700 hover:text-white">Ingresar</button>
    </section>
  );
}