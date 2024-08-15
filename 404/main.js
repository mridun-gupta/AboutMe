/* timer Logic */
let timeRemaining = 10;

function updateTimer() {
    const timerElements = document.querySelectorAll(".timer");
    if (timeRemaining > 0) {
        timeRemaining--;
        timerElements.forEach(timerElement => {
            timerElement.textContent = timeRemaining;
        });
    } else {
        window.location.href = "https://AboutMe.ship.mridungupta.eu.org/";
    }
}

setInterval(updateTimer, 1000);