// Dynamically set the copyright year
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("currentyear");
if (yearElement) {
    yearElement.textContent = currentYear;
}

// Dynamically set the last modified date
const lastModifiedDate = document.lastModified;
const modifiedElement = document.getElementById("lastModified");
if (modifiedElement) {
    modifiedElement.textContent = `Last edited: ${lastModifiedDate}`;
}
