
var btn= document.getElementsByClassName("drop__arrow")[0];
var drop= document.querySelector(".drop__bar");
var arrow= document.querySelector(".drop__arrow");
var arrow2= document.querySelector(".drop__arrow2");

btn.addEventListener("click",function(){
    drop.style.display="block";
    arrow.style.display="none";

})
arrow2.addEventListener("click",function(){
    drop.style.display="none";
    arrow.style.display="block";
    
})