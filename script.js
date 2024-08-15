let startTime, updatedTime, difference;
let timerInterval;
let running = false;

const display = document.getElementById("display");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");
const stopwatchContainer = document.querySelector(".stopwatch");

startStopButton.addEventListener("click", function() {
    if (!running) {
        startTime = new Date().getTime();
        timerInterval = setInterval(updateTime, 1000 / 60);
        startStopButton.textContent = "Pause";
        running = true;
        stopwatchContainer.classList.add("expanded"); 
    } else {
        clearInterval(timerInterval);
        startStopButton.textContent = "Start";
        running = false;
        stopwatchContainer.classList.remove("expanded"); 
    }
});

resetButton.addEventListener("click", function() {
    clearInterval(timerInterval);
    running = false;
    startStopButton.textContent = "Start";
    display.textContent = "00:00:00";
    difference = 0;
    stopwatchContainer.classList.remove("expanded"); 
});

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    display.textContent = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}
