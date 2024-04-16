import { Advertising, Home, MenuBar, Main } from "./components"

export default function App(){
  //const menuImages = require.context()
  return (
    <>
    <Advertising/>
    <header>
      <nav className=" flex justify-between items-center p-5 w-[90%] mx-auto">
        <Home/>
      </nav>
      <section>
        <MenuBar/>
      </section>
      <main>
        <Main/>
      </main>
     </header>
    </>
  );
}