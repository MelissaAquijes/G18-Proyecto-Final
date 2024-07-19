import { useSelector } from "react-redux";

export default function RegisterFooter(){

  const footButtonColor = useSelector((state)=>state.footButtonColor.color);
  const modBordersColor = useSelector((state)=>state.modBordersColor.color);

  const handleButtonClass = () => {
    return "w-full h-3/5 rounded-xl hover:border-4 hover:duration-200 hover:text-xl".concat(footButtonColor,modBordersColor);
  }

  return(
    <section id="submitAll" className="w-full h-1/5">
      <div className="h-2/5 text-sm">
        <input type="checkbox" id="acceptTerms" className="mx-1"/>
        <span>Acepto las </span>
        <a href="http://localhost:5173/terms_and_conditions" target="_blank" className="underline hover:text-indigo-600">
          Condiciones de servicio y Política de privacidad
        </a>
      </div>
      <button className={handleButtonClass()}>REGISTRARME</button>
    </section>
  );
}