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
}, 3000);

const stop = () => {
    clearInterval(intervalo);
}
sliderInners.addEventListener('mouseover', () => {
    stop();
});

//manu ouline
const imageButton = document.getElementById("imageButton");
const sidebar = document.getElementById("sidebar");

imageButton.addEventListener("click", function() {
  sidebar.style.display = (sidebar.style.display === "none") ? "block" : "none";
});
