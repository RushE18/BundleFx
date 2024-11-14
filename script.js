// Function to update and display the countdown timer
function startCountdown(endTime, display) {
    function updateTimer() {
        var now = new Date().getTime();
        var timeRemaining = endTime - now;

        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update countdown segments with the remaining time
        display.querySelector(".days .value").textContent = days;
        display.querySelector(".hours .value").textContent = hours;
        display.querySelector(".minutes .value").textContent = minutes;
        display.querySelector(".seconds .value").textContent = seconds;

        if (timeRemaining < 0) {
            clearInterval(interval);
            display.textContent = "EXPIRED";
        }
    }
    updateTimer();  // Initial call to update the timer
    var interval = setInterval(updateTimer, 1000);  // Update the timer every second
}

// Function to update progress bar as the user scrolls
function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";  // Update the progress bar width
}

// Add event listener for scroll to update progress bar
window.addEventListener("scroll", updateProgressBar);

// Initialize countdown and progress bar when DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    var countdown = document.getElementById("countdown");
    var endTime = new Date().getTime() + 24 * 60 * 60 * 1000;  // Set end time to 24 hours from now
    startCountdown(endTime, countdown);  // Start the countdown timer

    // Initialize progress bar
    updateProgressBar();
});
