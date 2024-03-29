'use strict';
const 
Header= document.querySelector("header .inner .MYIN ul li button"),

containerBox = document.getElementsByClassName("containerBox"),
TOOL = document.getElementsByClassName("TOOL"),
PROJECT = document.getElementsByClassName("PROJECT");

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function(e){
    if( window.scrollY > 10) {
      containerBox[0].style.opacity = "1";
    } else {
      containerBox[0].style.opacity = "0";
    }
  })
});