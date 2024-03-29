// about page
document.addEventListener('DOMContentLoaded', function () {
  const 
  NCEO =  document.querySelector(".NCEO"),
  FCEO =  document.querySelector(".FCEO"),
  NCA =  document.getElementsByClassName("NCA"),
  FCA =  document.getElementsByClassName("FCA"),
  
  NCEOp = document.querySelector(".NCEO>p>button"),
  FCEOp = document.querySelector(".FCEO>p>button");
  
  NCEOp.addEventListener('click',function(){
    NCEOp.style.background = 'skyblue';
    NCEOp.style.color = '#000';
    NCEOp.style.width = '200px';
    NCEOp.style.height = '100px';
    NCEOp.style.fontSize = '1.5rem';
    NCEOp.style.borderRadius = '20px';

    FCEOp.style.background = 'gray';
    FCEOp.style.color = '#fff';
    FCEOp.style.width = '120px';
    FCEOp.style.height = '65px';
    FCEOp.style.fontSize = '1rem';
    FCEOp.style.borderRadius = '10px';

    NCA[0].style.transform = 'scaleY(1)';
    NCA[0].style.opacity = '1';
    setTimeout(function(e){
      FCA[0].style.transform = 'scaleY(0)';
      FCA[0].style.opacity = '0';
    },350);
  });
  FCEOp.addEventListener('click',function(){
    NCEOp.style.background = 'gray';
    NCEOp.style.color = '#fff';
    NCEOp.style.width = '120px';
    NCEOp.style.height = '65px';
    NCEOp.style.fontSize = '1rem';
    NCEOp.style.borderRadius = '10px';
    
    FCEOp.style.background = 'skyblue';
    FCEOp.style.color = '#000';
    FCEOp.style.width = '200px';
    FCEOp.style.height = '100px';
    FCEOp.style.fontSize = '1.5rem';
    FCEOp.style.borderRadius = '20px';

    FCA[0].style.transform = 'scaleY(1)';
    FCA[0].style.opacity = '1';
    setTimeout(function(e){
      NCA[0].style.transform = 'scaleY(0)';
      NCA[0].style.opacity = '0';
    },350);
  });
});
