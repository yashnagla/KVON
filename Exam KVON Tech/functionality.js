// List of questions and options (including multiple select for hobbies) -->
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        multipleSelect: false  // Single select (radio buttons)
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
        multipleSelect: false  // Single select (radio buttons)
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        multipleSelect: false  // Single select (radio buttons)
    },
    {
        question: "Which of the following programming languages are used for web development?",
        options: ["HTML", "CSS", "Python", "JavaScript", "C++"],
        multipleSelect: true  // Multiple select (checkboxes)
    },
    {
        question: "Which of these are popular JavaScript frameworks?",
        options: ["React", "Vue.js", "Angular", "Django", "Flask"],
        multipleSelect: true  // Multiple select (checkboxes)
    },
    {
        question: "Which of these are common hobbies for developers?",
        options: ["Coding", "Reading tech blogs", "Gaming", "Music", "Photography"],
        multipleSelect: true  // Multiple select (checkboxes)
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        multipleSelect: false  // Single select (radio buttons)
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
        multipleSelect: false  // Single select (radio buttons)
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        multipleSelect: false  // Single select (radio buttons)
    },
    {
        question: "Which of the following programming languages are used for web development?",
        options: ["HTML", "CSS", "Python", "JavaScript", "C++"],
        multipleSelect: true  // Multiple select (checkboxes)
    },
    {
        question: "Which of these are popular JavaScript frameworks?",
        options: ["React", "Vue.js", "Angular", "Django", "Flask"],
        multipleSelect: true  // Multiple select (checkboxes)
    },
    {
        question: "Which of these are common hobbies for developers?",
        options: ["Coding", "Reading tech blogs", "Gaming", "Music", "Photography"],
        multipleSelect: true  // Multiple select (checkboxes)
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        multipleSelect: false  // Single select (radio buttons)
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
        multipleSelect: false  // Single select (radio buttons)
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        multipleSelect: false  // Single select (radio buttons)
    },
    {
        question: "Which of the following programming languages are used for web development?",
        options: ["HTML", "CSS", "Python", "JavaScript", "C++"],
        multipleSelect: true  // Multiple select (checkboxes)
    },
    {
        question: "Which of these are popular JavaScript frameworks?",
        options: ["React", "Vue.js", "Angular", "Django", "Flask"],
        multipleSelect: true  // Multiple select (checkboxes)
    },
    {
        question: "Which of these are common hobbies for developers?",
        options: ["Coding", "Reading tech blogs", "Gaming", "Music", "Photography"],
        multipleSelect: true  // Multiple select (checkboxes)
    }
];

// Array to track the answers for each question
const userAnswers = Array(questions.length).fill(null); // Initially, all answers are null

let currentQuestionIndex = 0;  // Start from the first question

// Function to update the question text and options
function updateQuestion() {
    const questionText = document.getElementById("questionText");
    const optionsContainer = document.getElementById("options");
    const skipBtn = document.getElementById("skipBtn");
    const prevBtn = document.getElementById("prevBtn");
    const clearBtn = document.getElementById("clearBtn");
    const questionNumbers = document.getElementById("questionNumbers");
    const mobileQuestionNumbers = document.getElementById("mobileQuestionNumbers");

    // Update question text
    questionText.innerHTML = questions[currentQuestionIndex].question;

    // Clear previous options
    optionsContainer.innerHTML = "";

    // Add options for the current question
    questions[currentQuestionIndex].options.forEach(option => {
        const optionDiv = document.createElement("div");
        optionDiv.classList.add("option");
        if (questions[currentQuestionIndex].multipleSelect) {
            // Multiple select (checkboxes)
            optionDiv.innerHTML = `
                        <input type="checkbox" name="question${currentQuestionIndex}" id="${option}" />
                        <label for="${option}">${option}</label>
                    `;
        } else {
            // Single select (radio buttons)
            optionDiv.innerHTML = `
                        <input type="radio" name="question${currentQuestionIndex}" id="${option}" />
                        <label for="${option}">${option}</label>
                    `;
        }
        optionsContainer.appendChild(optionDiv);
    });

    // Update question numbers in the sidebar
    questionNumbers.innerHTML = "";
    mobileQuestionNumbers.innerHTML = "";
    questions.forEach((_, index) => {
        const questionNumber = document.createElement("div");
        questionNumber.classList.add("question-number");
        questionNumber.innerHTML = index + 1;

        // Sidebar question numbers
        const sidebarQuestionNumber = questionNumber.cloneNode(true);
        sidebarQuestionNumber.classList.add("sidebar-number", "col-4");
        sidebarQuestionNumber.addEventListener("click", () => navigateToQuestion(index));
        questionNumbers.appendChild(sidebarQuestionNumber);

        // Mobile question numbers
        const mobileQuestionNumber = questionNumber.cloneNode(true);
        mobileQuestionNumber.classList.add("mobile-number");
        mobileQuestionNumber.addEventListener("click", () => navigateToQuestion(index));
        mobileQuestionNumbers.appendChild(mobileQuestionNumber);
    });

    // If it's the last question, replace the "Next" button with "Submit"
    if (currentQuestionIndex === questions.length - 1) {
        skipBtn.innerHTML = "Submit";
        skipBtn.classList.remove("btn-bg-primary");
        skipBtn.classList.add("btn-bg-success");
        skipBtn.setAttribute("aria-label", "Submit Quiz");
    } else {
        skipBtn.innerHTML = "Next";
        skipBtn.classList.remove("btn-bg-success");
        skipBtn.classList.add("btn-bg-primary");
        skipBtn.setAttribute("aria-label", "Next Question");
    }

    // If it's the first question, disable the "Previous" button
    if (currentQuestionIndex === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }
}

// Function to navigate to a specific question when a question number is clicked
function navigateToQuestion(index) {
    currentQuestionIndex = index;
    updateQuestion();
}

// Function to check if all questions are answered
function checkAllAnswered() {
    for (let i = 0; i < questions.length; i++) {
        // Check if the question is answered
        if (userAnswers[i] === null || userAnswers[i] === "") {
            return i; // Return the index of the first unanswered question
        }
    }
    return -1; // All questions are answered
}

// Event listener for the Next (Skip) button
document.getElementById("skipBtn").addEventListener("click", function () {
    if (currentQuestionIndex === questions.length - 1) {
        // If on the last question, submit the quiz
        const unansweredQuestionIndex = checkAllAnswered();
        if (unansweredQuestionIndex !== -1) {
            // If there are unanswered questions, redirect to the first unanswered one
            alert("Please answer all questions before submitting.");
            currentQuestionIndex = unansweredQuestionIndex;
            updateQuestion();
        } else {
            // All questions are answered, submit the quiz
            alert("Thanks for Submitting");
        }
    } else {
        // Increment the question index for "Next"
        currentQuestionIndex++;
        updateQuestion();
    }
});

// Event listener for the Previous button
document.getElementById("prevBtn").addEventListener("click", function () {
    if (currentQuestionIndex > 0) {
        // Decrement the question index
        currentQuestionIndex--;
        updateQuestion();
    }
});

// Event listener for the Clear button
document.getElementById("clearBtn").addEventListener("click", function () {
    // Get all checkboxes and radio buttons for the current question
    const checkboxes = document.querySelectorAll(`input[name="question${currentQuestionIndex}"]:checked`);
    const radios = document.querySelectorAll(`input[name="question${currentQuestionIndex}"]:checked`);

    // Clear selected checkboxes (multiple select questions)
    checkboxes.forEach(checkbox => checkbox.checked = false);
    // Clear selected radio buttons (single select questions)
    radios.forEach(radio => radio.checked = false);

    // Clear the user's answer for this question
    userAnswers[currentQuestionIndex] = null;
});

// Function to update the user's answers
function updateUserAnswer() {
    const options = document.querySelectorAll(`input[name="question${currentQuestionIndex}"]`);
    if (questions[currentQuestionIndex].multipleSelect) {
        // Multiple select (checkboxes)
        const selectedOptions = [];
        options.forEach(option => {
            if (option.checked) {
                selectedOptions.push(option.id);
            }
        });
        userAnswers[currentQuestionIndex] = selectedOptions.length > 0 ? selectedOptions : null;
    } else {
        // Single select (radio buttons)
        options.forEach(option => {
            if (option.checked) {
                userAnswers[currentQuestionIndex] = option.id;
            }
        });
    }
}

// Event listeners to update the user's answer when they select an option
document.getElementById("options").addEventListener("change", updateUserAnswer);

// Initialize the first question on page load
window.onload = function () {
    updateQuestion();
};