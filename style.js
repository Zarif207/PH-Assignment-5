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
      console.log("Number copied");
    }).catch(function(err) {
      console.log("Failed to copy:", err);
    });
  };
} 


//call history function
let coin = 100; 
const coindisplay = document.getElementById("callCoin");
coinDisplay.innerText = coin;

const callbuttons = document.getElementsByClassName("callBtn");
const historyContainer = document.querySelector(".history-container");

for (let i = 0; i < callButtons.length; i++) {
  const btn = callButtons[i];
  const originalClick = btn.onclick;

  btn.onclick = function () {
    if (coin >= 20) {
      if (typeof originalClick ==="function") {
        originalClick();
      }

      coin -= 20;
      coinDisplay.innerText = coin;
      const card = btn.closest(".card");
      const serviceName = card.querySelector(".card-title").innerText;
      const serviceNumber = card.querySelector(".card-number").innerText;
      
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

      const newHistory = document.createElement("div");
      newHistory.className = "bg-[#fafafa] w-auto h-auto p-4 m-5 rounded-lg flex justify-between";
      newHistory.innerHTML = `
        <div class="left">
            <h2 class="font-semibold pb-1">${serviceName}</h2>
            <h2 class="text-[#8f8f8f]">${serviceNumber}</h2>
        </div>
       <div class="right text-sm text-gray-500 whitespace-nowrap">
            ${timeString}
       </div> `;
      historyContainer.appendChild(newHistory);

    } else {
      alert("❌ You do not have enough coins!\nYou need at least 20 coins to make a call.");
    }
  };
}

// clear button function


