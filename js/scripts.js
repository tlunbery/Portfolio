// Mobile Menu Slider
function togglecp(){
     var cp = document.getElementById("cp"); 
     var image = document.getElementById("ham");
     var wrapper = document.getElementById("bottom_wrapper")
          
          cp.style.height = window.innerHeight - 100 + "%";
                                        
          if(cp.style.right == "0px"){ 
               cp.style.right = "-250px"; 
               image.src = "img/ham.png";
               wrapper.style.opacity = "1";
                                                           
          } else { 
               cp.style.right = "0px";
               image.src = "img/x.png";
               wrapper.style.opacity="0.4";
               
               }
          }
