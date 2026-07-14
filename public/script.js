const button = document.getElementById("bananaButton");
var bananaAudio = document.getElementById("bananaAudio");
const counter = document.getElementById("counter");

fetch("/counter")
    .then(response => response.json())
    .then(data => {
        counter.textContent = data.counter;
    });

function addBanana(){
    fetch("/click", {
        method:"POST"
    })
        .then(response => response.json())
        .then(data => {
            counter.textContent = data.counter;
        })

    bananaAudio.currentTime = 0;
    bananaAudio.play();
}

button.addEventListener("click", addBanana);