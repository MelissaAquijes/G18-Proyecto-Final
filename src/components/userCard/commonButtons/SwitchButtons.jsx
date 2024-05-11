import { useState } from "react";

export default function SwitchButtons(props){

  const handleLoginButtonEffects = (modalType) => {
    return (modalType==="login")
    ? "bg-blue hover:border-sky-600 hover:border-4 hover:duration-150"
    : "bg-white text-gray-300 hover:border-4 border-sky-600 hover:text-black hover:text-xl hover:duration-150"
  }

  const handleRegisterButtonEffects = (modalType) => {
    return (modalType==="register")
    ? "bg-blue hover:border-4 hover:border-sky-600 hover:duration-150"
    : "bg-white text-gray-300 hover:border-4 hover:border-sky-600 hover:text-black hover:text-xl hover:duration-150";
  }


  return(
    <section id="switchButtons" className="h-[15%] flex items-center w-full">
        <button className={`w-1/2 h-full flex justify-center items-center rounded-l-xl
                            ${handleLoginButtonEffects(props.modalType)}`}
                onClick={props.change2Login}>
          Ingresar
        </button>

        <button className={`w-1/2 h-full flex justify-center items-center rounded-r-xl
                            ${handleRegisterButtonEffects(props.modalType)}`}
                onClick={props.change2Register}>
          Quiero unirme!
        </button>
    </section>
  );
}