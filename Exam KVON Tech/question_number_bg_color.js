// Example statuses
const STATUS_ANSWERED = 'answered';
const STATUS_UNANSWERED = 'unanswered';
const STATUS_ATTEMPTED = 'attempted'; // New status for visited but not answered

// Array to track the status of each question
const questionStatuses = Array(questions.length).fill(STATUS_UNANSWERED); // Initialize all as unanswered

// Function to update background color based on status
function updateMobileQuestionNumberBackground(questionNumber, status) {
    const questionElement = document.getElementById(`mobile-question-${questionNumber}`);
    
    if (questionElement) {
        switch (status) {
            case STATUS_ANSWERED:
                questionElement.style.backgroundColor = 'green'; // Change to green if answered
                break;
            case STATUS_ATTEMPTED:
                questionElement.style.backgroundColor = 'red'; // Change to red if visited but not answered
                break;
            case STATUS_UNANSWERED:
            default:
                questionElement.style.backgroundColor = ''; // Reset to default if unanswered
                break;
        }
    }
}

// Function to mark a question as attempted or answered
function markQuestionStatus(questionIndex, status) {
    questionStatuses[questionIndex] = status; // Update the status in the array
    updateMobileQuestionNumberBackground(questionIndex + 1, status); // Update the UI
}

// Example usage
// Mark question 1 as attempted
markQuestionStatus(0, STATUS_ATTEMPTED); // This will change the background to red
// Mark question 1 as answered
markQuestionStatus(0, STATUS_ANSWERED); // This will change the background to green








// Event listener for question number click
document.querySelectorAll('.question-number').forEach((element, index) => {
    element.addEventListener('click', () => {
        // Mark the question as attempted when clicked
        markQuestionStatus(index, STATUS_ATTEMPTED);
        // Navigate to the question (your existing logic)
        navigateToQuestion(index);
    });
});