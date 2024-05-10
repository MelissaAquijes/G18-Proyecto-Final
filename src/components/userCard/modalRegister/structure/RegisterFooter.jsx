export default function RegisterFooter(){
  return(
    <section id="submitAll" className="bg-emerald-300 w-full h-1/5">
      <div className="border-4 h-2/5 text-sm">
        <input type="checkbox" id="acceptTerms" className="mx-1"/>
        <span>Acepto las </span>
        <a href="#" className="underline hover:text-violet-600">
          Condiciones de servicio y Política de privacidad
        </a>
      </div>
      <button className="border-4 w-full h-3/5 hover:bg-emerald-700 hover:text-white">Registrarme</button>
    </section>
  );
}