export default function Footer(){
    //const menuImages = require.context()
    return (
      <>
      <footer className="bg-pink-100 text-center lg:text-left">
      <div
        className="flex items-center justify-center border-b-2 p-6 lg:justify-between">
        <div className="hidden lg:block">
          <span>Conéctate con nosotros en las redes sociales:</span>
        </div>

        <div className="flex justify-end gap-8">
          <a href="#!">
            <img className="w-7" src="./assets/image.svg" alt=""/>
          </a>
          <a href="#!">
            <img className="w-7" src="./assets/image.svg" alt=""/>
          </a>

          <a href="#!">
            <img className="w-7" src="./assets/image.svg" alt=""/>
          </a>
          <a href="#!">
            <img className="w-7" src="./assets/image.svg" alt=""/>
          </a>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <img className="w-4 mr-2" src="./assets/image.svg" alt=""/>
              WAWITAS
            </h6>
            <p className="md:pr-7">
              Wawitas es la tienda especializada en artículos para bebés más
              linda de Lima, llena de productos de la mejor calidad de las
              marcas más reconocidas en un ambiente cálido y acogedor.
            </p>
          </div>

          <hr className="h-px bg-white border-0 md:hidden" />

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <img className="w-4 mr-2" src="./assets/image.svg" alt=""/>
           
              C C. Open Plaza, Surquillo
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <img className="w-4 mr-2" src="./assets/image.svg" alt=""/>
              hola@wawitas.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <img className="w-4 mr-2 me-3" src="./assets/image.svg" alt=""/>
              + 01 234 567 88
            </p>
          </div>

          <hr className="h-px bg-white border-0 md:hidden" />

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              WAWITAS
            </h6>
            <p className="mb-4">
              <a href="#!">Nosotros</a>
            </p>
            <p className="mb-4">
              <a href="#!">Tiendas</a>
            </p>
            <p className="mb-4">
              <a href="#!">Contáctanos</a>
            </p>
          </div>

          <hr className="h-px bg-white border-0 md:hidden" />

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              ATENCIÓN AL USUARIO
            </h6>
            <p className="mb-4">
              <a href="#!">Terminos de condiciones</a>
            </p>
            <p className="mb-4">
              <a href="#!">Cambios y devoluciones</a>
            </p>
            <p className="mb-4">
              <a href="#!">Política de privacidad</a>
            </p>
            <p>
              <a href="#!">Política de envío</a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#e6e5e5] p-6 text-center">
        <span>© 2024 Copyright:</span>
        <a className="font-semibold" href="https://tw-elements.com/">WAWITAS</a>
      </div>
    </footer>
      </>
    );
  }