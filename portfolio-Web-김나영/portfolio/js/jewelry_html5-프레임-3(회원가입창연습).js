var isOpen =false;
var bigPic = document.querySelector("#ring");
var smallPic = document.querySelectorAll(".small");

for(i = 0; i < smallPic.length; i++){
   smallPic[i].addEventListener("click", function(){
       newPic = this.src;
       bigPic.setAttribute("src", newPic);               
   });
}