export default function Slider (){
/*
  let sliderInners = document.querySelector(".sliderInner");
  let images = sliderInners.querySelectorAll("img");
  let index = 1
  setInterval(function(){
      let percentage = index * -100;
      sliderInners.style.transform = "translateX("+ percentage +"%)";
      if(index > images.length - 1){
          index = 0;
      }
      index++;
  }, 5000);
*/

/*
  const stop = () => {
    clearInterval(intervalo);
  }
    sliderInners.addEventListener('mouseover', () => {
    stop();
  });
*/

  return (
    <>
      <section className="">
        <div className="slider ">
          <div className="sliderInner flex flex-row flex-nowrap xl-auto">
            <img src="src\assets\images\image1.png" alt="" />
            <img src="src\assets\images\image2.png" alt="" />
            <img src="src\assets\images\image3.png" alt="" />
            <img src="src\assets\images\image4.png" alt="" />
          </div>
        </div>
      </section>
    </>   
  )
 
 }