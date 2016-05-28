// var paragraph = document.querySelector(".paragraph");
// var openHeader = document.querySelector("headList");
//
//   openHeader.eventListener("click", reveal);
//
// function reveal(){
//   paragraph.style.diplay = "block"
// }
//
//
// document.querySelector(".header").eventListener("hover",rotateColor)


// document.getElementByClass("dropdown").addEventListener("click", dropFunction);
// document.getElementById("button2").addEventListener("click", dropFunction);
// var paragraphShow = document.querySelector(".paragraph");
// var showSmall = document.querySelector(".hidesmall");
// function dropFunction (){
//   paragraphShow.className = "paragraphShow";
//   showSmall.className="";
//   showSmall.className="smallList";
//
// };
 x = 1+1
 console.log(x);

var drops = document.getElementsByClassName("header");
//var drops = document.querySelector(".header");
var paragraphShow = document.querySelector(".paragraph");
var showSmall = document.querySelector(".hidesmall");
//drops.addEventListener("click", dropFunction);
// drops.addEventListener("click", myFunction);
// function myFunction (){
  // alert("heygirl");
// };

  for (var i = 0; i < drops.length; i++){
    drops[i].addEventListener("click", function(){
    this.nextElementSibling.classList.toggle("show");
    //document.getElementById("paragraph").nextElementSibling.classList.toggle("smallList");
    //showSmall.className="smallList";
  });
}

//drops.addEventListener("click", dropFunction);
