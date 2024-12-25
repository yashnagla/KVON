// Countdown Timer Variables
let totalTime = 60 * 60; // 60 minutes in seconds
let timerInterval;

// Function to start the countdown timer
function startCountdown() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        // Calculate minutes and seconds
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;

        // Format time to always show two digits
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        timerElement.textContent = formattedTime;

        // Decrease total time by 1 second
        totalTime--;

        // Check if time is up
        if (totalTime < 0) {
            clearInterval(timerInterval);
            alert("Time is up! The quiz will now be submitted.");
            // Here you can add logic to submit the quiz or redirect
            // For example: submitQuiz();
        }
    }, 1000); // Update every second
}

// Start the countdown when the page loads
window.onload = function() {
    initializeTotalQuestions();
    updateQuestion(); // Initialize the first question display
    updateCurrentQuestionNumber(currentQuestionIndex); // Show the current question number
    startCountdown(); // Start the countdown timer
};