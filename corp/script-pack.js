// script.js

// Liste des codes prédéfinis
const codes = [
    "WOF-9R1X-7T8A-Q5JK", "WOF-3B8P-T2LQ-K1ZJ", "WOF-4N2Y-6XKM-V9RQ",
    "WOF-8J7V-2C1D-F6NB", "WOF-1X6H-9Q4Z-G5WL", "WOF-5F2K-3M8P-R7HT",
    "WOF-6C4Z-1Y8J-B2KN", "WOF-2L9X-5V7T-D3YJ", "WOF-7M1D-6B9Q-W4XP",
    "WOF-8Q2K-3H5V-N1ZJ", "WOF-3N7F-6X9C-K1TL", "WOF-1L5Y-8R3P-B9QD",
    "WOF-4V8K-2C6M-T7NJ", "WOF-9J1D-5Y2H-X3QB", "WOF-6M4T-7N9X-C1YL",
    "WOF-2H5K-8V3Q-R7WD", "WOF-3C7L-1X9Z-T5MP", "WOF-8K2N-6F4Y-J1BD",
    "WOF-5Q1X-7M8T-K3VJ", "WOF-7V6D-9R2H-C1LP"
];

// Fonction pour récupérer un code aléatoire
function getRandomCode() {
    return codes[Math.floor(Math.random() * codes.length)];
}

// Fonction pour gérer le chronomètre et le code
function requestCode() {
    const lastTimeKey = `lastTime`;
    const lastTime = localStorage.getItem(lastTimeKey);
    const currentTime = new Date().getTime();

    // Vérifier si 24 heures se sont écoulées
    if (lastTime && currentTime - lastTime < 86400000) {
        const remainingTime = 86400000 - (currentTime - lastTime);
        displayTimer(remainingTime);
    } else {
        // Générer et afficher un nouveau code
        const code = getRandomCode();
        const codeElement = document.getElementById(`code-output`);
        codeElement.innerText = `Votre code à mettre dans la boutique: ${code}`;

        // Enregistrer le temps actuel
        localStorage.setItem(lastTimeKey, currentTime);

        // Lancer le chronomètre
        displayTimer(86400000);
    }
}

// Fonction pour afficher le chronomètre
function displayTimer(duration) {
    const timerElement = document.getElementById(`timer`);
    const endTime = new Date().getTime() + duration;

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const remainingTime = endTime - now;

        if (remainingTime <= 0) {
            clearInterval(interval);
            timerElement.innerText = "";
        } else {
            const hours = Math.floor(remainingTime / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            timerElement.innerText = `Nouveau code disponible dans: ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
}
