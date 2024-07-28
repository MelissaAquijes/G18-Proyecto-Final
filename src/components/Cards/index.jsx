export default function Cards({products, onAddProduct}) {
  
  return (
    <>
      <section className="m-auto flex justify-center">
        <div className="grid grid-cols-2 gap-5 p-5 max-md:grid-cols-2 md:p-10 md:gap-10 md:px-16 lg:grid-cols-3 xl:grid-cols-4 xl:px-28">
          {products?.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
            >
              <div>
                <img src={product.img_url} alt={product.nombre} />
              </div>

              <div className="p-3 flex items-center flex-col gap-3 md:gap-3.5 md:py-5">
                <h2 className="text-xl font-bold text-center md:text-[16px]">{product.nombre}</h2>
                <p className=" md:text-sl">{product.descripcion}</p>
                <p className="font-bold md:text-xl">S/.{product.precio}</p>
                <button
                  className="bg-black text-white font-bold transition-all text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 hover:bg-pink w-full hover:scale-105 focus:scale-105 active:scale-110 md: mx-4"
                  onClick={()=> onAddProduct(product)}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
