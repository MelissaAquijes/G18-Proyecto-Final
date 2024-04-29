import ModalLogin from "./ModalLogin";

export default function Login(){
  return(

    // {/* MODAL */}
    <div id="modal" className="relative z-50 w-full">

      {/* Background oscuro del modal */}
        <div className="fixed inset-0 bg-black/70"></div>

      {/* Cuerpo del modal */}
        <ModalLogin/>
    
    </div>

  );
}

