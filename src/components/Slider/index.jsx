import React from "react"
import Carousel  from "./Carousel"

  const slides=[
    "./image1.png",
    "./image2.png",
    "./image3.png",
    "./image4.png",

  ]   
  export default function Slider (){
    return (
    <div className="flex h-100% justify-center items-center h-[100%] ">
      <div className="max-w-screen-2xl  ">

      <Carousel autoSlide={true} >
          {slides.map((slide) => (
            <img src={slide} />
          ))}
        </Carousel>
      
      </div>
    </div>
    )
  }
