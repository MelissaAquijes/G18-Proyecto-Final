import { Advertising, Home, MenuBar, Main, Footer } from "./components"

export default function App(){
   return (
    <>
    <Advertising/>
    <header>
      <nav>
        <MenuBar/>
      </nav>
      <main>
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </header>
    </>
  );
}