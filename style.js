// heart icons function
const hearts = document.getElementsByClassName("heartIcon"); 
const heartNumber = document.getElementById("heartNumber"); 

let count = 0; 

for (let i = 0; i < hearts.length; i++) {
  hearts[i].onclick = function(){
    count++; 
    heartNumber.innerText = count; 
  };
}


// call button alert 

document.getElementById('nationalServiceBtn').onclick = function (){
    alert('📞 Calling National Emergency Service 999...');
}
document.getElementById('policeHelplineBtn').onclick = function (){
    alert('📞 Calling Police Helpline 999...');
}
document.getElementById('fireServiceBtn').onclick = function (){
    alert('📞 Calling Fire Service 999...');
}
document.getElementById('ambulanceServiceBtn').onclick = function (){
    alert('📞 Calling Ambulance Service 1994-999999...');
}
document.getElementById('womenChildBtn').onclick = function (){
    alert('📞 Calling Women & Child Helpline 109...');
}
document.getElementById('antiCorruptionBtn').onclick = function (){
    alert('📞 Calling Anti-Corruption Helpline 106...');
}
document.getElementById('electricityOutageBtn').onclick = function (){
    alert('📞 Calling Electricity Helpline 16216...');
}
document.getElementById('bracBtn').onclick = function (){
    alert('📞 Calling Brac Helpline 16445...');
}
document.getElementById('RailwayBtn').onclick = function (){
    alert('📞 Calling Bangladesh Railway Helpline 163...');
}








