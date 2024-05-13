import { useState } from "react";


export default function LoginFields(props){

  // values={values}
  // handleInputChange={handleInputChange}
   
  return(
    <section id="fields" className="w-full h-[60%] flex flex-col justify-center items-center gap-5 bg-lavender rounded-xl ">
              
      {/* <img className="w-[25%]" src="src/assets/images/Twin-Baby.png" alt=""/> */}

      <div id="emailField" className="w-full h-1/5 flex border-4 rounded-xl">  
        <i className="fa-solid fa-at w-[10%] flex justify-center items-center rounded-l-[8px] border-r-4"></i>

        <label htmlFor="email" className="w-[90%] h-full rounded-r-lg">
          <input 
                type="email" 
                name="email" 
                value={props.values.email}
                onChange={props.handleInputChange}
                placeholder="Correo electrónico" 
                className="w-full h-full p-[3%] rounded-r-lg outline-none"/>
        </label>
      </div>

      <div id="pswdField" className="w-full h-1/5 flex border-4 rounded-xl">
        <i className="fa-solid fa-key w-[10%] flex justify-center items-center rounded-l-[8px] border-r-4"></i>

        <label htmlFor="pswd" className="bg-yellow-200 w-[90%] h-full rounded-r-lg">
          <input 
                type="password" 
                name="pswd"
                value={props.values.pswd}
                onChange={props.handleInputChange}
                placeholder="Contraseña" 
                className="w-full h-full p-[3%] rounded-r-lg outline-none"/>
        </label>
      </div>

    </section>
  );
}