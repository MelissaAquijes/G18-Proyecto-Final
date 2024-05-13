import {LoginHeader,SwitchButtons,LoginFields,LoginFooter} from "../../../index";
import { createUser } from "../../../../services/firebase";


export default function LoginStructure(props){

  const displayContent = (modal) => (modal === "login")? "" : "hidden";

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await createUser(props.values.email, props.values.pswd);
  }

  return(
    <>
      <div className= {`w-1/2 h-[93%] bg-white p-5 border-84 border-gray-700 rounded-xl 
          ${displayContent(props.modalType)}`}>

        <LoginHeader/>

        {/*  Contenido del modalLogin */}
        <div id="modal-content" className="w-full h-[85%]">

          <form action="" id="form-edit" 
                className="w-full h-full font-bold flex flex-col justify-between"
                onSubmit={handleFormSubmit}>
            <SwitchButtons 
              modalType={props.modalType}
              change2Login={props.change2Login}
              change2Register={props.change2Register}/>
            <LoginFields 
              values={props.values}
              handleInputChange={props.handleInputChange}/>
            <LoginFooter/>
          </form>

        </div>

      </div>
    </>
  );
}



// relative right-[25px] bottom-[15px] 

