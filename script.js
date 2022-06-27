// variable storing word to guess
// use the variable length to determine number of underlines
// listen to the user's key-pressing. 
// if their key target matches a letter, underline becomes that letter






// Once the user clicks the "Start Game" button, the screen empties and a timer renders and starts running.
var main = document.querySelector("main");
var countdown = 300;

var word = ['f', 'a', 'r', 'l','e','y'];



// Starts timer
function startGame() {
    main.innerHTML = "";
    var timerText = document.createElement("p");
    main.appendChild(timerText);

    // show underscores for every character in the word variable
    for (var i = 0; i < word.length; i++) {
        var underscore = document.createElement("p");
        underscore.textContent= '_';
        main.appendChild(underscore);
    }

    var timer = setInterval(function () {
        countdown--;
        timerText.textContent = "Timer: " + countdown;        
    }, 1000)
}

// Pointer to the "Start Game" button
var startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startGame);