export default function SwitchButtons(props){

  return(
    <section id="switchButtons" className="bg-orange-200 flex items-center w-full">
        <button className="w-1/2 p-[1.8%] border-4 flex justify-center items-center bg-orange-500"
                onClick={props.change2Login}>
          Ingresar
        </button>

        <button className="w-1/2 p-[1.8%] border-4 flex justify-center items-center"
                onClick={props.change2Register}>
          Quiero unirme!
        </button>
    </section>
  );
}