import { useSelector } from "react-redux";

export default function LoginFooter(){

  const footButtonColor = useSelector((state)=>state.footButtonColor.color);
  const modBordersColor = useSelector((state)=>state.modBordersColor.color);

  const handleButtonClass = () => {
    return "w-full h-3/5 rounded-xl hover:border-4 hover:duration-200 hover:text-xl".concat(footButtonColor,modBordersColor);
  }

  return(
    <section id="submitAll" className="w-full h-1/5 font-bold">
      <div className="h-2/5 flex justify-between px-2 text-sm">
        <div>
          <input type="checkbox" id="acceptTerms" className="mx-1"/>
          <span>Recordar</span>
        </div>

        <a href="http://localhost:5173/forgot_my_password" target="_blank" className="hover:text-indigo-600 hover:underline mx-1">
          Olvidé mi contraseña
        </a>
      </div>
      
      <button className={handleButtonClass()}>
        INGRESAR
      </button>
    </section>
  );
}
