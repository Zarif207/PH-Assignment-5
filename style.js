// heart icons function
const hearts = document.querySelectorAll(".heartIcon"); 
const heartNumber = document.getElementById("heartNumber"); 

let count = 0; 

for (let i = 0; i < hearts.length; i++) {
  hearts[i].onclick = function() {
    count++; 
    heartNumber.innerText = count; 
  };
}







