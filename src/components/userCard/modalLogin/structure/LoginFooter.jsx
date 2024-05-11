export default function LoginFooter(){
  return(
    <section id="submitAll" className="bg-amber-400 h-[20%] font-bold">
      <div className="border-4 h-2/5 text-sm flex items-center justify-between px-2">
        <div>
          <input type="checkbox" id="acceptTerms" className="mx-1"/>
          <span>Recordar</span>
        </div>

        <a href="#" className="hover:text-blue-600 hover:underline mx-1">
          Olvidé mi contraseña
        </a>
      </div>
      
      <button className="border-4 w-full h-3/5 bg-violet-500 hover:bg-emerald-700 hover:text-white">Ingresar</button>
    </section>
  );
}
