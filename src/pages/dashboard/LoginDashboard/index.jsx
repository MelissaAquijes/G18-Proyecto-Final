export default function Login() {
  return (
    <>
       <section className="max-w-md m-auto flex items-center justify-center h-[100vh]">
        <div className="bg-blue p-5 rounded-md w-full md:w-md">
          <div className="my-5">
            <h1 className="text-center text-2xl font-bold">Wawita Admin</h1>
          </div>
          <form className="my-5">
            <div className="my-5">
              <input
                type="email"
                placeholder="User Administrator"
                className="px-3 py-2 rounded-md border outline-none w-full"
              />
            </div>
            <div className="my-5">
              <input
                type="password"
                placeholder="Password"
                className="px-3 py-2 rounded-md border outline-none w-full"
              />
            </div>
            <div className="my-5">
              <button
                className=" border text-white font-bold w-full px-3 py-2 rounded-md
              bg-green-600 hover:bg-green-700"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}