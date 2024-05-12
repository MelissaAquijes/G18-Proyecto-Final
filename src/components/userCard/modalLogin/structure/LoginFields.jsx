export default function LoginFields(){
  return(
    <section id="fields" className="w-full h-[60%] flex flex-col justify-center items-center gap-5 bg-lavender rounded-xl ">
              
      {/* <img className="w-[25%]" src="src/assets/images/Twin-Baby.png" alt=""/> */}

      <div id="emailField" className="w-full h-1/5 flex border-4 rounded-xl">  
        <i className="fa-solid fa-at w-[10%] flex justify-center items-center rounded-l-[8px] border-r-4"></i>

        <label htmlFor="email" className="w-[90%] h-full rounded-r-lg">
          <input type="text" id="email" placeholder="Nombre de usuario / Correo electrónico" className="w-full h-full p-[3%] rounded-r-lg outline-none"/>
        </label>
      </div>

      <div id="pswdField" className="w-full h-1/5 flex border-4 rounded-xl">
        <i className="fa-solid fa-key w-[10%] flex justify-center items-center rounded-l-[8px] border-r-4"></i>

        <label htmlFor="pwd" className="bg-yellow-200 w-[90%] h-full rounded-r-lg">
          <input type="password" id="pswd" placeholder="Contraseña" className="w-full h-full p-[3%] rounded-r-lg outline-none"/>
        </label>
      </div>

    </section>
  );
}