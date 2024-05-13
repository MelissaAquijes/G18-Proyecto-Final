import { useState } from "react";
import {LoginStructure, RegisterStructure, CloseButton} from "../index";



export default function ModalUser(props){

  var [modalType,setModalType] = useState("login");

  const change2Register = () => setModalType("register")
  const change2Login = () => setModalType("login")

  const [values,setValues] = useState({
    email: "",
    pswd: "",
  });

  const handleInputChange = (event) => {
    const {name,value} = event.target;
    setValues({
      ...values,
      [name]: value,
    })
  }

  return(
    // {/* MODAL */}
    <div id="modal" className={`relative z-50 w-full ${(props.modalStatus==="open")? "" : "hidden"}`}>

      {/* Background oscuro del modal */}
      <div className="fixed inset-0 bg-black/70"></div>


      {/* Cuerpo del modal */}
      <div className="fixed inset-0 w-full p-6 flex justify-center items-center rounded-md">

        <LoginStructure modalType={modalType}
                        change2Login={change2Login}
                        change2Register={change2Register}
                        values={values}
                        handleInputChange={handleInputChange}/>

        <RegisterStructure modalType={modalType}
                           change2Login={change2Login}
                           change2Register={change2Register}/>

        {/* Botón cerrar */}
        <CloseButton closeUserModal={props.closeUserModal}/>

      </div>


    </div>

  );
}

