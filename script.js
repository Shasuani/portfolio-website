let seconds = 0;

function updateTimer() {
    seconds++;
    document.getElementById("timer").textContent = seconds;
}

setInterval(updateTimer, 1000);