
// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav li');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show'); // Toggle the "show" class
  hamburger.textContent = navMenu.classList.contains('show') ? 'X' : '☰'; // Update icon
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show'); // Hide the menu
    hamburger.textContent = '☰'; // Reset the icon
  });
});




const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Antofagasta Chile",
    location: "Avenida de las Palmeras 44 Antofagasta",
    dedicated:"2020, November, 27",
    area: 2230000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-48608-main.jpg",
  },
  {
    templeName:"Boston Massachusetts",
    location: "100 Hinckley Wy Belmont, Massachusetts",
    dedicated:"1997, June, 13",
    area: 69600,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/boston-massachusetts-temple/boston-massachusetts-temple-9913-main.jpg",
  },
  {
    templeName:"CleveLand Ohio",
    location:"5997 Brecksville Road Independence, Ohio, United States",
    dedicated:" 2024, June, 1",
    area: 9900,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/cleveland-ohio-temple/cleveland-ohio-temple-39008-main.jpg",
  }
  // Add more temple objects here...
];

// Function to display temples
function displayTemples(filteredTemples) {
    const container = document.getElementById("temple-container");
    container.innerHTML = "";

    filteredTemples.forEach(temple => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");

        templeCard.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

          // Add event listener for bounce effect
        templeCard.addEventListener("click", () => {
            templeCard.classList.add("bounce");
            setTimeout(() => {
                templeCard.classList.remove("bounce");
            }, 300); // Matches animation duration
        });

        container.appendChild(templeCard);
    });
}

// Function to filter temples
function filterTemples(category) {
    let filteredList = [];

    if (category === "old") {
        filteredList = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
    } else if (category === "new") {
        filteredList = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
    } else if (category === "large") {
        filteredList = temples.filter(t => t.area > 90000);
    } else if (category === "small") {
        filteredList = temples.filter(t => t.area < 10000);
    } else {
        filteredList = temples;
    }

    displayTemples(filteredList);
}




// Footer updates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Load all temples initially
document.addEventListener("DOMContentLoaded", () => {
    displayTemples(temples);
});