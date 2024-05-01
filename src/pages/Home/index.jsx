import { Advertising, Header, Main, Slider } from "../../components";

export default function homepage(){
  
  return (
    <>
    <Advertising/>
    <header>
      <Header/>
      <section>
        <Slider/>
      </section>
      <main>
        <Main/>
      </main>
     </header>
    </>
  );
}
