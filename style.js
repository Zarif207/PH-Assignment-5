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


// coin cost function
let coins = 100;
const coinDisplay = document.getElementById("callCoin");
const callButtons = document.getElementsByClassName("callBtn");

for (let i = 0; i < callButtons.length; i++) {
  const btn = callButtons[i];
  const originalClick = btn.onclick;

  btn.onclick = function (){
    if (coins >= 20) {
      if (typeof originalClick === "function") {
        originalClick();
      }
      coins -= 20;
      coinDisplay.innerText = coins;
    } else {
      alert("❌ You do not have enough coins! \n You will need at least 20 coins to make call.");
    }
  };
}















 // copy count function

const copyButtons = document.getElementsByClassName("copyBtn"); 
const copyNumberCount = document.getElementById("copyNumber"); 

let num = 0; 

for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].onclick = function(){
    num++; 
    copyNumberCount.innerText = num + ' Copy'; 
    
    const card = this.closest(".card");
    const numberText = card.querySelector(".card-number").innerText; 
    
    alert("The number has been copied: " + numberText);
    navigator.clipboard.writeText(numberText).then(function() {
      console.log("Copied successfully!");
    }).catch(function(err) {
      console.log("Failed to copy:", err);
    });
  };
} 
















