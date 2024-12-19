// Total steps/pages in the process
const totalSteps = 5;

// Get progress bar element
const progressBar = document.getElementById('progress-bar');

// Determine the current step based on the page
const pageToStepMap = {
  'name.html': 1,
  'dob.html' : 2,
  'gender-page.html': 3,
  'address.html': 4,
  'hobby.html': 5,
};

// Get the current page name from the URL
const currentPage = window.location.pathname.split('/').pop();

// Set the current step based on the current page
const currentStep = pageToStepMap[currentPage] || 1;

// Update progress bar based on the current step
function updateProgressBar() {
  const progressPercentage = (currentStep / totalSteps) * 100;
  progressBar.style.width = `${progressPercentage}%`;
  progressBar.setAttribute('aria-valuenow', progressPercentage);
}

// Save the current step to localStorage for next page reference
function saveProgress() {
  localStorage.setItem('currentStep', currentStep);
}

// Initialize progress bar on page load
updateProgressBar();

// Save progress when navigating to the next page
document.getElementById('next-button')?.addEventListener('click', saveProgress);
