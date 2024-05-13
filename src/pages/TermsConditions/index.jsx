// Página que muestra los términos y condiciones del registro en Wawitas

export default function TermsConditions() {
  return(
    <>
      <div className="max-w-md grid place-content-center">
        <div>
          <h1>TÉRMINOS Y CONDICIONES: WAWITAS CO.</h1>
        </div>
        <form action="">
          <div>
            <input type="email" placeholder="Ingrese su correo"/>
          </div>

          <div>
            <input type="password" placeholder="Ingrese su contraseña"/>
          </div>

          <p className="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, blanditiis ad dolore eius obcaecati quibusdam qui! Fugiat vitae voluptas aliquid natus perspiciatis quibusdam temporibus incidunt recusandae esse, omnis nobis atque!
          </p> 

          <div>
            <button className="bg-bblue rounded-xl p-4">Iniciar Sesión</button>
          </div>
        </form>

          
        
      </div>
    </>
  );
}