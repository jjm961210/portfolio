// index page
// 사이트 시작부분 광고영상
const FAV = document.getElementById("FAV"),

// 
BP = document.getElementById("BP"),
BPp = document.querySelector("#BP>p"),
AC = document.getElementById("AC");

container1R = document.querySelector(".container1 .conbox-right"),
container2R = document.querySelector(".container2 .conbox-right"),
container3R = document.querySelector(".container3 .conbox-right"),
container4R = document.querySelector(".container4 .conbox-right"),
container5R = document.querySelector(".container5 .conbox-right"),
container1L = document.querySelector(".container1 .conbox-left"),
container2L = document.querySelector(".container2 .conbox-left"),
container3L = document.querySelector(".container3 .conbox-left"),
container4L = document.querySelector(".container4 .conbox-left"),
container5L = document.querySelector(".container5 .conbox-left");

BP.addEventListener('click', function(e){
  window.scrollTo(0,750);
  setTimeout(function(e){
    AC.style.opacity = '1';
    AC.style.width = '80%';
    AC.style.background = '##ff7357';
    AC.style.height = '570px';
    AC.style.border = '5px solied #ff6a00';
    BP.style.lineHeight = '100px'; 
    BPp.style.display = 'none';
  },250);
  setTimeout(function(e){
    container1R.style.width = '100px';
    container1R.style.height = '100%';
    container2R.style.width = '100px';
    container2R.style.height = '100%';
    container3R.style.width = '100px';
    container3R.style.height = '100%';
    container4R.style.width = '100px';
    container4R.style.height = '100%';
    container5R.style.width = '100px';
    container5R.style.height = '100%';
    
    container1L.style.width = '100px';
    container1L.style.height = '100%';
    container2L.style.width = '100px';
    container2L.style.height = '100%';
    container3L.style.width = '100px';
    container3L.style.height = '100%';
    container4L.style.width = '100px';
    container4L.style.height = '100%';
    container5L.style.width = '100px';
    container5L.style.height = '100%';
  }, 1100);
  console.log(setTimeout);
});

FAV.addEventListener('mouseenter',function(e){
    setTimeout(function(e){
      FAV.style.height = '0%';
    }, 250);
});

BP.addEventListener('mouseenter',function(e){
  BP.style.background = 'red';
  BP.style.color = '#fff';
  BPp.style.color = '#000'
});
BP.addEventListener('mouseleave',function(e){
  BP.style.background = '#fff';
  BP.style.color = '#000';
});


// banner
const BRT  = document.getElementById("BRT"),
BRT1 = document.getElementsByClassName("BRT1"),
BRT2 = document.getElementsByClassName("BRT2");

// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.documentElement.scrollTop > 1150) {
//     BRT.style.opacity = "1";
//   } else {
//     BRT.style.opacity = "0";
//   }
// };

window.addEventListener('scroll', function(e){
  if( window.scrollY > 1150) {
    BRT.style.opacity = "1";
  } else {
    BRT.style.opacity = "0";
  }
});
