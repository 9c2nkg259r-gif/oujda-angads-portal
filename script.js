// script.js - Logique principale du portail Oujda-Angads

// Fonction pour l'horloge en temps réel
function updateClock() {
    const clockElement = document.getElementById('live-clock');
    if (clockElement) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('fr-FR');
        clockElement.textContent = 'LIVE ' + timeString;
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    setInterval(updateClock, 1000);
});