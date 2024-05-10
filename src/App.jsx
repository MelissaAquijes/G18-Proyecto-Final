
import AdvertisingBarHome from "./components/Home/advertising/AdvertisingBarHome";
import HeaderBarHome from "./components/Home/header/HeaderBarHome";
import NavigateBarHome from "./components/Home/navigate/NavigateBarHome";
import NavigateBarHome_mobile from "./components/Home/navigate/NavigateBarHome_mobile";
import Slider from "./components/Home/slider/Slider";
import ModalUser from "./components/userCard/ModalUser";

import { useState } from "react";


export default function App(){

  // // Variable para conocer el estado del Modal (abierto o cerrado)
  // var [isOpen, setIsOpen] = useState(false);

  // // Función para controlar la apertura-cierre del modal
  // const handleModalLogin = (state) => {
  //   state ? setIsOpen(false) : setIsOpen(true);
  // }

  var [modalStatus, setModalStatus] = useState("close");
  const openUserModal = () => setModalStatus("open");
  const closeUserModal = () => setModalStatus("close");

  return (
    
    // general container 
    <> 
      {/* Login Modal */} 
      <ModalUser modalStatus={modalStatus} closeUserModal={closeUserModal}/>


      {/*Orange bar - top of webpage*/}
      <AdvertisingBarHome/>
      
      {/* Bar: Location + Wsp + LOGO + search + login + cart */}
      <HeaderBarHome openUserModal={openUserModal}/>

      {/* Navigate Bar - Store Categories*/}
      <hr className="my-2 mx-8 border"/> 
        <NavigateBarHome/>
      <hr className="my-2 mx-8 border"/> 
      


      {/* Slider -> Images carousel below navigate bar*/}
      <Slider/>



      {/* Aside de navegación en mobile */}
      <NavigateBarHome_mobile/>






    </>//end general container
  );
}








