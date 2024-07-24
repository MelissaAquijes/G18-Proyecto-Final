import { useSelector, useDispatch } from "react-redux";
import { getEmailInput, getPasswordInput} from "../../../../app/slices/formInputSlice";
import { useState } from "react";

export default function LoginFields(){

  const footButtonColor = useSelector((state)=>state.footButtonColor.color);
  const modBordersColor = useSelector((state)=>state.modBordersColor.color);
  
  const handleButtonClass = () => {
    return "w-full h-3/5 rounded-xl hover:border-4 hover:duration-200 hover:text-xl".concat(footButtonColor,modBordersColor);
  }


  // Uso de reducers para el Form
  const dispatch = useDispatch();
  const loginEmail = useSelector((state)=>state.formInputs.emailInput);
  const loginPassword = useSelector((state)=>state.formInputs.passwordInput);

  /// Login Fields: Email input
  // Función para capturar email input
  const handleLoginEmailData = (event) => {
    dispatch(getEmailInput(event.target.value));
  };
  
  // Función para capturar password input
  const handleLoginPasswordData = (event) => {
    dispatch(getPasswordInput(event.target.value));
  };

  /// Capturar los datos en el submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginEmail,loginPassword);
  };


  return(

    <form onSubmit={handleFormSubmit} id="loginFields" className="w-full h-[85%] flex flex-col justify-center gap-2 items-center rounded-xl">
              
      <section className="w-full h-[70%] flex flex-col justify-center items-center gap-5 rounded-xl bg-lavender" >
        <div id="emailLoginField" className="w-full h-1/5 flex border-4 rounded-xl">  
          <i className="fa-solid fa-at w-[10%] flex justify-center items-center rounded-l-[8px] border-r-4"></i>

          <input 
                  type="email" 
                  name="emailLogin" 
                  value={loginEmail}
                  onChange={handleLoginEmailData}
                  placeholder="Correo electrónico" 
                  className="w-full h-full p-[3%] rounded-r-lg outline-none"/>
        </div>

        <div id="pswdFieldLogin" className="w-full h-1/5 flex border-4 rounded-xl">
          <i className="fa-solid fa-key w-[10%] flex justify-center items-center rounded-l-[8px] border-r-4"></i>

          <input 
                  type="password" 
                  name="pswdLogin"
                  value={loginPassword}
                  onChange={handleLoginPasswordData}
                  placeholder="Contraseña" 
                  className="w-full h-full p-[3%] rounded-r-lg outline-none"/>
        </div>
      </section>

      <section id="submitAllLogin" className="w-full h-[25%] font-bold">
        <div className="h-2/5 flex justify-between px-2 text-sm">
          <div>
            <input type="checkbox" name="rememberCheckbox" className="mx-1"/>
            <span>Recordar</span>
          </div>

          <a href="http://localhost:5173/forgot_my_password" target="_blank" className="hover:text-indigo-600 hover:underline mx-1">
            Olvidé mi contraseña
          </a>
        </div>
        
        <button type="submit" className={handleButtonClass()}>
          INGRESAR
        </button>
      </section>

    </form>
  );
}