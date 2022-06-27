// Once the user clicks the "Start Game" button, the screen empties and a timer renders and starts running.
var main = document.querySelector("main");
var countdown = 300;

// Starts timer
function startGame() {
    main.innerHTML = "";
    var timerText = document.createElement("p");
    main.appendChild(timerText);

    var timer = setInterval(function () {
        countdown--;
        timerText.textContent = "Timer: " + countdown;
    }, 1000)
}

// Pointer to the "Start Game" button
var startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startGame);