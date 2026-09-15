const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const windChill = document.querySelector("#wind-chill");

const temperature = 45;
const windSpeed = 8;

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

function calculateWindChill(temperature, windSpeed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temperature * (windSpeed ** 0.16));
}

if (temperature <= 50 && windSpeed > 3) {
    windChill.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °F`;
} else {
    windChill.textContent = "N/A";
}