
import AdvertisingBarHome from "./components/Home/advertising/AdvertisingBarHome";
import HeaderBarHome from "./components/Home/header/HeaderBarHome";
import NavigateBarHome from "./components/Home/navigate/NavigateBarHome";
import NavigateBarHome_mobile from "./components/Home/navigate/NavigateBarHome_mobile";
import Slider from "./components/Home/slider/Slider";
import Login from "./components/Home/login/a.Login";


export default function App(){
  //const menuImages = require.context()
  return (
    
    // general container 
    <> 
      {/*Orange bar - top of webpage*/}
        <AdvertisingBarHome/>
      
      {/* Bar: Location + Wsp + LOGO + search + login + cart */}
        <HeaderBarHome/>

      {/* Navigate Bar - Store Categories*/}
        <hr className="my-2 mx-8 border"/> 
          <NavigateBarHome/>
        <hr className="my-2 mx-8 border"/> 
      


      {/* Slider -> Images carousel below navigate bar*/}
        <Slider/>



      {/* Aside de navegación en mobile */}
        <NavigateBarHome_mobile/>


      {/* Login Modal */}
        <Login/>



    </>//end general container
  );
}








