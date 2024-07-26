// top
// boxShadow initial means zero don't use zero in

// select btn 

// btnlister{
//     modal.style.top = "50%";
//     modal.style.boxShadow =""
// }

var modal = document.querySelector("#block");
var button =  document.querySelector("#btn");
// var flag = 0;

button.addEventListener("click", function(){
    modal.style.top = "50%";
    modal.style.boxShadow = "0px 0px 0px 500px rgba(0, 0, 0, 0.644)";
})

modal.addEventListener("click", function(){
    // alert();
    modal.style.top = "-50%";
    modal.style.boxShadow = "initial";
})