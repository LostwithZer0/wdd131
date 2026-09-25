// ========================================
// TRAINQUIL EFFECTS
// Main Website JavaScript
// ========================================


// ---------- MOBILE NAVIGATION ----------

const menuButton = document.querySelector("#menu-button");
const primaryNav = document.querySelector("#primary-nav");

function toggleMenu() {
    const menuIsOpen = primaryNav.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", menuIsOpen);

    menuButton.setAttribute(
        "aria-label",
        menuIsOpen ? "Close navigation menu" : "Open navigation menu"
    );
}

function closeMenu() {
    primaryNav.classList.remove("open");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
}

if (menuButton && primaryNav) {
    menuButton.addEventListener("click", toggleMenu);

    primaryNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });
}


// ---------- FAQ ACCORDION ----------

const faqQuestions = document.querySelectorAll(".faq-question");

function toggleFaq(event) {
    const question = event.currentTarget;
    const answer = question.nextElementSibling;
    const isOpen = question.getAttribute("aria-expanded") === "true";

    question.setAttribute("aria-expanded", !isOpen);
    answer.classList.toggle("open");
}

faqQuestions.forEach((question) => {
    question.addEventListener("click", toggleFaq);
});


// ---------- CURRENT YEAR ----------

const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// ---------- LAST MODIFIED ----------

const lastModified = document.querySelector("#last-modified");

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}


// ========================================
// PORTFOLIO
// ========================================

const portfolioDogs = [
    {
        name: "Charly",
        breed: "Goldendoodle",
        image: "images/portfolio-charly.webp"
    },
    {
        name: "JoJo",
        breed: "Mini Goldendoodle",
        image: "images/portfolio-jojo.webp"
    },
    {
        name: "Dex",
        breed: "Mini Goldendoodle",
        image: "images/portfolio-dex.webp"
    },
    {
        name: "Howie",
        breed: "Cavapoo",
        image: "images/portfolio-howie.webp"
    },
    {
        name: "Crush",
        breed: "Mini Goldendoodle",
        image: "images/portfolio-crush.webp"
    },
    {
        name: "Thor",
        breed: "Yorkie",
        image: "images/portfolio-thor.webp"
    },
    {
        name: "Piper",
        breed: "Mini Schnauzer",
        image: "images/portfolio-piper.webp"
    },
    {
        name: "Bert & Ernie",
        breed: "Scottish Terriers",
        image: "images/portfolio-bert-and-ernie.webp"
    },
    {
        name: "Bumi",
        breed: "Chorkie",
        image: "images/portfolio-bumi.webp"
    },
    {
        name: "Cody",
        breed: "Australian Cobberdog",
        image: "images/portfolio-cody.webp"
    },
    {
        name: "Briar",
        breed: "Aussie Doodle",
        image: "images/portfolio-briar.webp"
    },
    {
        name: "Snickers",
        breed: "Toy Poodle",
        image: "images/portfolio-snickers.webp"
    },
    {
        name: "Hallie",
        breed: "Maltese",
        image: "images/portfolio-hallie.webp"
    },
    {
        name: "Scout",
        breed: "Mini Poodle",
        image: "images/portfolio-scout.webp"
    },
    {
        name: "Penny",
        breed: "Maltipoo",
        image: "images/portfolio-penny.webp"
    },
    {
        name: "Koda",
        breed: "Cavapoo",
        image: "images/portfolio-koda.webp"
    },
    {
        name: "Dolly",
        breed: "Trainquil Effects Client",
        image: "images/portfolio-dolly.webp"
    }
];

function createPortfolioCard(dog) {
    return `
        <article class="portfolio-card">
            <div class="portfolio-card-image">
                <img
                    src="${dog.image}"
                    alt="${dog.name}, ${dog.breed}, groomed by Trainquil Effects"
                    loading="lazy"
                    width="600"
                    height="600"
                >
            </div>

            <div class="portfolio-card-content">
                <h3>${dog.name}</h3>
                <p>${dog.breed}</p>
            </div>
        </article>
    `;
}

function displayPortfolio(dogs) {
    const portfolioCards = document.querySelector("#portfolio-cards");

    if (portfolioCards) {
        portfolioCards.innerHTML = dogs
            .map((dog) => createPortfolioCard(dog))
            .join("");
    }
}

displayPortfolio(portfolioDogs);


// ========================================
// CONTINUING EDUCATION
// ========================================

const continuingEducation = [
    {
        title: "A Close Look at Canine Enrichment",
        image: "images/canine-enrichment-certificate.webp"
    },
    {
        title: "Client and Colleague Communication",
        image: "images/communication-certificate.webp"
    },
    {
        title: "Using Distractions: Fear Free Do's and Don'ts",
        image: "images/distractions-certificate.webp"
    },
    {
        title: "Groomer Stress: Simple Behaviors to Help You",
        image: "images/fear-free-behavior-certificate.webp"
    },
    {
        title: "Path to a Great Bath",
        image: "images/great-bath-certificate.webp"
    },
    {
        title: "Understanding Medical Conditions and Pain",
        image: "images/medical-conditions-certificate.webp"
    },
    {
        title: "Nail Trims: Behavioral Considerations to Trim Away the Terror",
        image: "images/nail-trim-psych-certificate.webp"
    },
    {
        title: "Addressing Noise Aversion in Dogs",
        image: "images/noise-aversion-certificate.webp"
    },
    {
        title: "Next Level Nail Trims",
        image: "images/nxt-lvl-nails-certificate.webp"
    },
    {
        title: "Neurobiology of Toxic Stress",
        image: "images/toxic-stress-certificate.webp"
    }
];

function createCertificateCard(certificate) {
    return `
        <article class="certificate-card">
            <div class="certificate-card-image">
                <img
                    src="${certificate.image}"
                    alt="${certificate.title} continuing education certificate"
                    loading="lazy"
                    width="358"
                    height="264"
                >
            </div>

            <div class="certificate-card-content">
                <p class="card-label">Continuing Education</p>
                <h3>${certificate.title}</h3>
            </div>
        </article>
    `;
}

function displayCertificates(certificates) {
    const certificateScroll = document.querySelector("#certificate-scroll");

    if (certificateScroll) {
        certificateScroll.innerHTML = certificates
            .map((certificate) => createCertificateCard(certificate))
            .join("");
    }
}

displayCertificates(continuingEducation);


// ========================================
// APPOINTMENT SERVICE PREFERENCE
// ========================================

const serviceSelect = document.querySelector("#service");

function saveServicePreference() {
    localStorage.setItem(
        "trainquilPreferredService",
        serviceSelect.value
    );
}

function loadServicePreference() {
    const savedService = localStorage.getItem(
        "trainquilPreferredService"
    );

    if (savedService) {
        serviceSelect.value = savedService;
    }
}

if (serviceSelect) {
    loadServicePreference();

    serviceSelect.addEventListener(
        "change",
        saveServicePreference
    );
}


// ========================================
// APPOINTMENT EMAIL SUBJECT
// ========================================

const appointmentForm = document.querySelector("#appointment-form");
const clientNameInput = document.querySelector("#name");
const dogNameInput = document.querySelector("#dog-name");
const formSubject = document.querySelector("#form-subject");

function createAppointmentSubject() {
    const clientName = clientNameInput.value.trim();
    const dogName = dogNameInput.value.trim();

    formSubject.value =
        `Appointment Request | Dog: ${dogName} | Client: ${clientName}`;
}

if (
    appointmentForm &&
    clientNameInput &&
    dogNameInput &&
    formSubject
) {
    appointmentForm.addEventListener(
        "submit",
        createAppointmentSubject
    );
}