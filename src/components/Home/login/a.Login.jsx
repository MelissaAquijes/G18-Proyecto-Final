import ModalLogin from "./b.ModalLogin";

export default function Login(){
  return(

    // {/* MODAL */}
    <div id="modal" class="relative z-50 w-full">

      {/* Background oscuro del modal */}
        <div class="fixed inset-0 bg-black/70"></div>

      <div class="bg-red-500">Hola</div>

      {/* Cuerpo del modal */}
        <ModalLogin/>
    
    </div>

  );
}

