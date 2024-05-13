import { useSelector } from "react-redux";
import React, { useState } from 'react';
const NavBar = () => {
  return (
    <div>
      <nav className=" flex justify-between items-center p-5 w-[100%] mx-auto">
       <img className="cursor-pointer lg:hidden h-6 pr-20" 
        id="imageButton"  src="src\assets\icons\menu-outline.svg" alt="" />
        <div className="flex flex-row pl-10 gap-5">
        <div className="flex h-5 max-lg:hidden">
        <img className="px-2" src="src\assets\icons\location-outline.svg" alt="" />
            <a className="hover:text-gray-300" href="">tienda</a>
        </div>
        <div className="flex h-5 max-lg:hidden">
            <img className="px-2" src="src\assets\icons\logo-whatsapp.svg" alt="" />
            <a className="hover:text-gray-300" href="">993607786</a>
          </div>
        </div>
        <div>
          <img className="md:w-50" src="src\assets\images\logo.png" alt="" />
        </div>
        <div className="flex gap-5 h-7 text-center px-10 cursor-pointer">
          <img className="" src="src\assets\icons\search-outline.svg" alt=""/>
          <img src="src\assets\icons\person-outline.svg" alt=""/>
          <img src="src\assets\icons\bag-outline.svg" alt="" /> 
          <div className="absolute bg-gray-100 rounded-full bottom-2 right-0"> </div>
        </div>
        
        {/* {value} */}
       
      </nav>
    </div>
  )
}

export default NavBar