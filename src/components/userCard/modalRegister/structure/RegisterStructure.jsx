import {RegisterHeader,SwitchButtons,RegisterFields,RegisterFooter} from "../../../index"


export default function RegisterStructure(props){

  const displayContent = (modal) => (modal === "register")? "" : "hidden";
  const handleFormSubmit = (event) => {
    event.preventDefault();
  }


  return(
    <>
      <div className={`w-1/2 h-[93%] bg-white p-5 border-84 border-gray-700 rounded-xl
        ${displayContent(props.modalType)}`}>

        <RegisterHeader/>

        {/*  Contenido del modal */}
        <div id="modal-content" className="w-full h-[85%]"
             onSubmit={handleFormSubmit}>

          <form action="" id="form-edit" className="w-full h-full font-bold">
            <SwitchButtons 
              modalType={props.modalType}
              change2Login={props.change2Login}
              change2Register={props.change2Register}/>
            <RegisterFields/>
            <RegisterFooter/>
          </form>

        </div>
      </div>
    </>
  );
}


{/* <div className="fixed inset-0 w-full p-6 flex justify-center items-center rounded-md">

<div className="w-1/2 h-[90%] bg-white p-5 border-84 border-gray-700 rounded-xl">

  <RegisterHeader/> */}

  {/*  Contenido del modal */}
//   <div id="modal-content" className="w-full h-[85%] bg-emerald-400">

//     <form action="" id="form-edit" className="w-full h-full font-bold">
//       <SwitchButtons/>
//       <RegisterFields/>
//       <RegisterFooter/>
//     </form>

//   </div>

// </div>

{/* Botón cerrar */}
{/* <CloseButton isOpen={props.isOpen} handleModalLogin={props.handleModalLogin}/>

</div>  */}