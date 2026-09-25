// Get the current review count from localStorage
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increase the count by one
reviewCount++;

// Save the new count
localStorage.setItem("reviewCount", reviewCount);

// Display the count
const reviewCountDisplay = document.querySelector("#review-count");
reviewCountDisplay.textContent = reviewCount;

// Footer
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;