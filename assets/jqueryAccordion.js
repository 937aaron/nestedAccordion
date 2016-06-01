// var drops = document.getElementsByClassName("header");
// //var drops = document.querySelector(".header");
// var paragraphShow = document.querySelector(".paragraph");
// var showSmall = document.querySelector(".hidesmall");
//
// //drops.addEventListener("click", dropFunction);
// // drops.addEventListener("click", myFunction);
// // function myFunction (){
//   // alert("heygirl");
// // };
//
//   for (var i = 0; i < drops.length; i++){
//     drops[i].addEventListener("click", function(){
//     this.nextElementSibling.classList.toggle("show");

var drops = $(".header");


$.each(drops, function(i, drops){

  $(drops).click(function(){
    $(drops).next().toggle("display");
    console.log("hello");
  });
});
// $(drops).click(function(){
//   $(drops).next().toggle("display");
//   console.log("hello");
//
//
// });
