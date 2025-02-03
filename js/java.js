const heroElements = document.querySelectorAll('.hero .text, .hero .image');

// Fonction pour ajouter la classe 'visible' progressivement
const revealHeroElements = (entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 300); // Ajout d'un décalage de 300 ms entre chaque élément
            observer.unobserve(entry.target); // Arrête d'observer une fois visible
        }
    });
};

// Crée un IntersectionObserver
const heroObserver = new IntersectionObserver(revealHeroElements, {
    threshold: 0.1
});

// Observer chaque élément de la section hero
heroElements.forEach(element => {
    heroObserver.observe(element);
});



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

// Crée un IntersectionObserver
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




