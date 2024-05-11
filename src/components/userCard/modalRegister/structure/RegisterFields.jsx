export default function RegisterFields(){
  return(
    <section id="fields" className="border-4 border-black w-full h-[70%] py-[5%] flex flex-col justify-center gap-5">

      <div id="emailField" className="w-full h-1/5 flex border-4 rounded-xl">  
        <i className="fa-solid fa-at bg-rose-300 w-[10%] h-[100%] flex justify-center items-center rounded-l-[8px] border-r-4"></i>

        <label htmlFor="email" className="bg-purple-200 w-[90%] h-full rounded-r-lg">
          <input type="text" id="email" placeholder="Email" className="bg-emerald-300 w-full h-full p-[3%] rounded-r-lg outline-none"/>
        </label>
      </div>

      <div id="nameField" className="w-full h-1/5 flex justify-between">

        <div className="w-[49%] h-full flex border-4 rounded-xl">
          <i className="fa-solid fa-user bg-rose-300 w-1/5 h-full flex justify-center items-center rounded-l-[8px] border-r-4"></i>

          <label htmlFor="name" className="bg-green-200 w-4/5 h-full flex rounded-r-lg">
            <input type="text" id="name" placeholder="Nombre(s)" className="bg-emerald-300 w-full h-full p-[3%] rounded-r-lg outline-none"/>
          </label>
        </div>

        <div className="w-[49%] h-full flex border-4 rounded-xl">
          <i className="fa-solid fa-user bg-rose-300 w-1/5 h-full flex justify-center items-center rounded-l-[8px] border-r-4"></i>

          <label htmlFor="lastName" className="bg-sky-200 w-4/5 h-full flex rounded-r-lg">
            <input type="text" id="lastName" placeholder="Apellidos" className="bg-emerald-300 w-full h-full p-[3%] rounded-r-lg outline-none"/>
          </label>
        </div>
      </div>


      <div id="pswdField" className="h-1/5 flex border-4 rounded-xl">
        <i className="fa-solid fa-key bg-rose-300 w-[10%] h-full flex justify-center items-center rounded-l-[8px] border-r-4"></i>

        <label htmlFor="pwd" className="bg-yellow-200 w-[90%] h-full rounded-r-lg">
          <input type="password" id="pswd" placeholder="Contraseña" className="bg-emerald-300 w-full h-full p-[3%] rounded-r-lg outline-none"/>
        </label>
      </div>

      <div id="confirmPswdField" className="h-1/5 flex border-4 rounded-xl">
        <i className="fa-solid fa-lock bg-rose-300 w-[10%] h-full flex justify-center items-center rounded-l-[8px] border-r-4"></i>

        <label htmlFor="confirmPwd" className="bg-purple-200 w-[90%] h-full rounded-r-lg">
          <input type="password" id="confirmPswd" placeholder="Confirmar Contraseña" className="bg-emerald-300 w-full h-full p-[3%] rounded-r-lg outline-none"/>
        </label>
      </div>

    </section>

  );
}

// Se cambió for por htmlFor en los labels de cada formulario