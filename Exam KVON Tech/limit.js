let windowsKeyPressCount = 0;
// Disable right-click context menu
$(document).on("contextmenu", function (e) {
    e.preventDefault();
});

// Disable F12 (Developer Tools)
$(document).on("keydown", function (e) {
    if (e.ctrlKey ||
        e.key === "Meta" ||    // F12
        (e.ctrlKey && e.key === "r") || // Ctrl+r
        (e.ctrlKey && e.key === "R") || // Ctrl+R
        e.key === "Tab" || //Tab key navigation
        e.key === "F5" || // F5 for refresh
        e.key === "Alt" || // Alt Key
        e.key === "Meta" || // Windows key / Command key
        e.key === "ContextMenu" || // Menu button on some keyboards
        e.key === "Escape") { // Escape key
        e.preventDefault();
    }

    // Count the number of times the Windows key is pressed
    if (e.key === "Meta") {
        windowsKeyPressCount++;

        // Trigger alert only if Windows key is pressed more than once
        if (windowsKeyPressCount > 1) {
            alert("Windows key pressed more than once!");
            windowsKeyPressCount = 0; // Reset count after alert
        }
    }

});

// Detect if user changes the tab
let hidden, visibilityChange;
if (typeof document.hidden !== "undefined") {
    hidden = "hidden";
    visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
}

// Add a listener to visibilitychange
document.addEventListener(visibilityChange, function () {
    if (document[hidden]) {
        let endTime = new Date(); // Record the quiz end time
        let totalTime = Math.floor((endTime - startTime) / 1000); // Time in seconds
        alert("You have changed the tab!");
        submitQuiz(totalTime)
    }
});

// Set up a timer to automatically submit the quiz after 60 minutes (3600 seconds)
function startAutoSubmitTimer() {
    quizTimer = setTimeout(function () {
        let endTime = new Date();
        let totalTime = Math.floor((endTime - startTime) / 1000); // Time in seconds
        submitQuiz(totalTime); // Automatically submit the quiz
    }, 60 * 60 * 1000); // 60 minutes in milliseconds
}

const fullscreenBtn = document.getElementById('fullscreenBtn');
const mainContent = document.getElementById('mainContent');
const modal = document.getElementById('fullscreenModal');

fullscreenBtn.addEventListener('click', () => {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().then(() => {
            mainContent.classList.remove('blur');
            modal.style.display = 'none';
        });
    } else {
        alert("Fullscreen not supported on your browser.");
    }
});

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        let endTime = new Date();
        let totalTime = Math.floor((endTime - startTime) / 1000); // Time in seconds
        submitQuiz(totalTime)
        mainContent.classList.add('blur');
        modal.style.display = 'block';
    }
});