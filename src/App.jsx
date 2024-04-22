
import AdvertisingBarHome from "./components/Home/1.advertising/AdvertisingBarHome";
import HeaderBarHome from "./components/Home/2.header/HeaderBarHome";
import NavigateBarHome from "./components/Home/3.navigate/NavigateBarHome";
import NavigateBarHome_mobile from "./components/Home/3.navigate/NavigateBarHome_mobile";
import Slider from "./components/Home/4.slider/Slider";
import Login from "./components/Home/2.login/a.Login";


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








