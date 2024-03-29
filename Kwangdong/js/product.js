// product page
const PD = document.getElementsByClassName("pd"),
PDEX = document.getElementsByClassName("PDEX"),
PDIMG = document.getElementsByClassName("PDIMG"),
CLOSE = document.getElementsByClassName("CLOSE");
  for(let i = 0; i<PD.length; i++){
    PD[i].addEventListener('click',function(){
      PD[i].style.width = '32%';
      PD[i].style.height = '100%';
      PDIMG[i].style.height = '75%';
      PDEX[i].style.display = 'block';
      CLOSE[i].style.display = 'block';
    });
    CLOSE[i].addEventListener('mouseleave',function(){
      PD[i].style.width = '25%';
      PD[i].style.height = '80%';
      PDIMG[i].style.height = '100%';
      PDEX[i].style.display = 'none';
      CLOSE[i].style.display = 'none';
    });
  }
