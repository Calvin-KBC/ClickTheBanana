const button = document.getElementById("bananaButton");
var bananaAudio = document.getElementById("bananaAudio");

let bananas = 0;
function addBanana(){
    bananas++;
    bananaAudio.currentTime = 0;
    bananaAudio.play();
    counter.textContent = bananas;
}

button.addEventListener("click", addBanana);