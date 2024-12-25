// Initialize the current question index
let current_Question_Index = 0;

// Function to initialize the total questions count
function initializeTotalQuestions() {
    const totalQuestionsElement = document.getElementById("totalQuestions");
    totalQuestionsElement.textContent = questions.length;
}

// Function to update the current question number
function updateCurrentQuestionNumber(index) {
    const currentQuestionNumberElement = document.getElementById("currentQuestionNumber");
    currentQuestionNumberElement.textContent = index + 1;
}

// Call this function whenever the user navigates to a new question
function navigateToQuestion(index) {
    current_Question_Index = index;
    updateQuestion();
    updateCurrentQuestionNumber(index);
}

// Initialize total questions on page load
window.onload = function() {
    initializeTotalQuestions();
    updateQuestion();
    updateCurrentQuestionNumber(current_Question_Index);
};