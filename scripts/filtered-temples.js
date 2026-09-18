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
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "Idaho Falls Idaho",
        location: "Idaho Falls, Idaho, United States",
        dedicated: "1945, September, 23",
        area: 92177,
        imageUrl: "images/idaho-falls-temple.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 53997,
        imageUrl: "images/tokyo-japan-temple.jpg"
            
    }
];

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
const templeGrid = document.querySelector(".temple-grid");
const pageTitle = document.querySelector("h1");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");

    if (menuButton.classList.contains("open")) {
        menuButton.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }
});

function displayTemples(templeList) {
    templeGrid.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img
                src="${temple.imageUrl}"
                alt="${temple.templeName} Temple"
                loading="lazy"
                width="400"
                height="250"
            >
        `;

        templeGrid.appendChild(card);
    });
}

function getDedicatedYear(temple) {
    return Number(temple.dedicated.split(",")[0]);
}

document.querySelector("#home").addEventListener("click", (event) => {
    event.preventDefault();
    pageTitle.textContent = "Home";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (event) => {
    event.preventDefault();
    pageTitle.textContent = "Old Temples";

    const oldTemples = temples.filter(
        (temple) => getDedicatedYear(temple) < 1900
    );

    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", (event) => {
    event.preventDefault();
    pageTitle.textContent = "New Temples";

    const newTemples = temples.filter(
        (temple) => getDedicatedYear(temple) > 2000
    );

    displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", (event) => {
    event.preventDefault();
    pageTitle.textContent = "Large Temples";

    const largeTemples = temples.filter(
        (temple) => temple.area > 90000
    );

    displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", (event) => {
    event.preventDefault();
    pageTitle.textContent = "Small Temples";

    const smallTemples = temples.filter(
        (temple) => temple.area < 10000
    );

    displayTemples(smallTemples);
});

displayTemples(temples);

const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;