export default function Cards(props) {
  const { products } = props;

  return (
    <>
      <section className="m-auto">
        <div className="grid grid-cols-3 max-md:grid-cols-2 xl:grid-cols-3 gap-5 p-5">
          {products?.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
            >
              <div className="">
                <img src={product.image} alt={product.title} />
              </div>

              <div className="p-6 flex flex-col gap-3">
                <h2>{product.title}</h2>
                <p className="font-bold">S/.{product.price}</p>
                <button className="border-none text-white bg-black p-3 rounded-lg cursor-pointer">
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
