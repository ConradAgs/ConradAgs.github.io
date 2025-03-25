

const container = document.querySelector('.projets-container');

//** Section des projets**
const projetCards = document.querySelectorAll('.projet-card');

const revealProjects = () => {
    projetCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;

        // Ajoute ou supprime la classe "visible"
        if (cardTop < window.innerHeight - 100 && cardBottom > 0) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', revealProjects);


// **2. Gestion des compétences et expériences avec IntersectionObserver**
const competenceItems = document.querySelectorAll('#competences .column > div, #competences .experience-item');

// Fonction qui gère la visibilité
const revealCompetences = (entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Ajoute la classe "visible" avec un décalage
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200); // Décalage de 200 ms entre chaque élément
        } else {
            // Supprime la classe "visible" si l'élément sort de la vue
            entry.target.classList.remove('visible');
        }
    });
};

const competenceObserver = new IntersectionObserver(revealCompetences, {
    threshold: 0.1, // L'élément est considéré visible si 10% de sa surface est visible
});

// Observe chaque élément des compétences/expériences
competenceItems.forEach(item => {
    competenceObserver.observe(item);
});





// **Gestion des expériences extra-scolaires**
const extrascolaireCards = document.querySelectorAll('.extrascolaire-card');

const revealExtrascolaire = () => {
    extrascolaireCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;

        // Ajoute ou supprime la classe "visible"
        if (cardTop < window.innerHeight - 100 && cardBottom > 0) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible');
        }
    });
};

// Écouteur de défilement pour les cartes extra-scolaires
window.addEventListener('scroll', revealExtrascolaire);







//**Mon menu

document.addEventListener("DOMContentLoaded", function () {
    const menuBouton = document.querySelector(".menu-bouton");
    const navigation = document.getElementById("navigation-principale");

    menuBouton.addEventListener("click", function () {
        this.classList.toggle("is-active");
        navigation.classList.toggle("active");
    });

    // Fermer le menu si on clique à l'extérieur
    document.addEventListener("click", function (event) {
        if (!menuBouton.contains(event.target) && !navigation.contains(event.target)) {
            menuBouton.classList.remove("is-active");
            navigation.classList.remove("active");
        }
    });
});






// Ma section de compétences

document.addEventListener("DOMContentLoaded", function () {
    const competenceData = {
        programmation: ["Python", "R", "HTML", "CSS", "SAS"],
        visualisation: ["R Shiny", "Power BI", "Matplotlib", "Seaborn"],
        bdd: ["SQL", "XML"],
        ml: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "Random Forest"],
        cloud: ["AWS", "Google Cloud"],
        softskills: [" Esprit d’analyse et de synthèse", "Autonomie et prise d’initiative", "Rigueur et méthode"]
    };

    const modal = document.getElementById("competence-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalList = document.getElementById("modal-list");
    const closeButton = document.querySelector(".close");

    document.querySelectorAll(".competence-item").forEach(item => {
        item.addEventListener("click", function () {
            const competenceKey = this.getAttribute("data-competence");
            if (competenceData[competenceKey]) {
                modalTitle.textContent = this.textContent.trim();
                modalList.innerHTML = competenceData[competenceKey].map(skill => `<li>${skill}</li>`).join("");
                modal.style.display = "flex";
            }
        });
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});



function openModal() {
    document.getElementById("modal").style.display = "block";
}
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
