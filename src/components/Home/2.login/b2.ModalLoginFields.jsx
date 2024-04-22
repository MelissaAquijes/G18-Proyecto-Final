export default function ModalLoginFields(){
  return(
    <section id="fields" class="bg-gray-800 w-full h-[70%] py-[5%] flex flex-col justify-center items-center gap-5">
              
      <img className="w-[30%]" src="src/assets/images/Twin-Baby.png" alt=""/>

      <div id="emailField" class="w-full h-1/5 flex border-4 rounded-xl">  
        <i class="fa-solid fa-at bg-rose-300 w-[10%] flex justify-center items-center rounded-l-[8px] border-r-4"></i>

        <label for="email" class="bg-purple-200 w-[90%] h-full rounded-r-lg">
          <input type="text" id="email" placeholder="Nombre de usuario / Correo electrónico" class="bg-emerald-300 w-full h-full p-[3%] rounded-r-lg outline-none"/>
        </label>
      </div>

      <div id="pswdField" class="w-full h-1/5 flex border-4 rounded-xl">
        <i class="fa-solid fa-key bg-rose-300 w-[10%] flex justify-center items-center rounded-l-[8px] border-r-4"></i>

        <label for="pwd" class="bg-yellow-200 w-[90%] h-full rounded-r-lg">
          <input type="password" id="pswd" placeholder="Contraseña" class="bg-emerald-300 w-full h-full p-[3%] rounded-r-lg outline-none"/>
        </label>
      </div>
    </section>
  );
}