const power = document.querySelector(".power");
const dispaly = document.querySelector(".display-2");

function action(){
    
        power.classList.toggle("powerjs")
        dispaly.classList.toggle("display-2js");
    
}

power.addEventListener("click",action);



