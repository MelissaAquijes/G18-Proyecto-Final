import React, {useState,useEffect} from 'react'
import {ChevronLeft,ChevronRight} from "react-feather"


const Carousel = ({ children: slides,autoSlide=false,autoSlideInterval = 3000 }) => {
  const [current, setCurrent]=useState(0)

  const previous = () => setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
 
  const next = () => setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
}, [])

  return (
    <div className='overflow-hidden relative'>
      <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${current * 100}%)`}}>
        {slides}
      </div>
      <div className='absolute inset-0 flex items-center justify-between'>
        <button onClick={previous} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' >
          <ChevronLeft/>
        </button>
        <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
          <ChevronRight/>
        </button>
      </div>
      <div  className='absolute bottom-4 right-0 left-0'>
        <div  className='flex items-center justify-center gap-2'>
          {slides.map((slide,index)=>(
              <div key={index} className={`transition-all w-1.5 h-1.5 bg-white rounded-full ${current === index ? "p-0.5" : "bg-opacity-50"}`}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel