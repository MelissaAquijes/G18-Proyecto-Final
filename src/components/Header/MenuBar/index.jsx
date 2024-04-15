//import { iconMenu } from "../../../assets/icons";

export default function MenuBar(){
    return (
      <>    ✔️
      <header>
        <nav className=" flex justify-between items-center p-5 w-[100%] mx-auto">
          <img 
            className="cursor-pointer lg:hidden h-6 pr-20" 
            id="imageButton" 
            src={ iconMenu }
            alt="" 
            onclick="Open()" 
          /> 
        </nav>
      </header>
        
      </>
    );
  }