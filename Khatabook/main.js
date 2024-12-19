// Add Customer Page JS

// Function to show pop-up
 function showPopup() {
  document.getElementById("popup").style.display = "flex";
}

// Function to close the pop-up
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Add More button action: reloads the page to stay on the same page
function addMore() {
  window.location.href = "./add_customer.html";
}

// Go Back button action: redirects to the homepage
function goBack() {
  window.location.href = "./dashboard.html";
}