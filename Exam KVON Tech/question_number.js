// Initialize the current question index
let current_Question_Index = 0;

// Function to initialize the total questions count
function initializeTotalQuestions() {
    const totalQuestionsElement = document.getElementById("totalQuestions");
    if (totalQuestionsElement && questions) {
        totalQuestionsElement.textContent = `${questions.length}`;
    } else {
        console.error("Element with ID 'totalQuestions' or 'questions' array is undefined.");
    }
}

// Function to update the current question number
function updateCurrentQuestionNumber(index) {
    const currentQuestionNumberElement = document.getElementById("currentQuestionNumber");
    if (currentQuestionNumberElement) {
        currentQuestionNumberElement.textContent = `${index + 1}`; // Update the displayed number
        // console.log("Current Question Number:", index + 1); // Log to console for debugging
    } else {
        // console.error("Element with ID 'currentQuestionNumber' is undefined.");
    }
}

// Function to display the current question
function displayCurrentQuestion() {
    const questionDisplayElement = document.getElementById("questionDisplay");
    if (questionDisplayElement && questions[current_Question_Index]) {
        questionDisplayElement.textContent = questions[current_Question_Index];
        // console.log("Displaying Question:", questions[current_Question_Index]); // Log the current question
    } else {
        // console.error("Element with ID 'questionDisplay' is undefined or question index is out of bounds.");
    }
}

// Function to change the question
function changeQuestion(direction) {
    // console.log("Changing question direction:", direction); // Log the direction of change
    if (direction === 'next') {
        if (current_Question_Index < questions.length - 1) {
            current_Question_Index++;
        }
    } else if (direction === 'prev') {
        if (current_Question_Index > 0) {
            current_Question_Index--;
        }
    }
    updateCurrentQuestionNumber(current_Question_Index);
    displayCurrentQuestion();
}

// Event listeners for buttons
document.getElementById("skipBtn").addEventListener("click", function() {
    changeQuestion('next');
});

document.getElementById("prevBtn").addEventListener("click", function() {
    changeQuestion('prev');
});

// Ensure the DOM is fully loaded before executing functions
document.addEventListener("DOMContentLoaded", function() {
    initializeTotalQuestions();
    updateCurrentQuestionNumber(current_Question_Index);
    displayCurrentQuestion();
});