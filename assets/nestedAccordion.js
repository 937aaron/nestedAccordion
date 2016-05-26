var paragraph = document.querySelector(".paragraph");
var openHeader = document.querySelector("headList");

  openHeader.eventListener("click", reveal);

function reveal(){
  paragraph.style.diplay = "block"
}


document.querySelector(".header").eventListener("hover",rotateColor)
