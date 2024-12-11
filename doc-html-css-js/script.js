const toggleButton = document.getElementById('toggleBtn');
const body = document.body;

// Vérifier si le mode sombre est déjà activé
if (localStorage.getItem('darkMode') === 'enabled') {
body.classList.add('dark-mode');
toggleButton.textContent = 'Activer le Mode Clair';
}

// Basculer entre le mode sombre et clair
toggleButton.addEventListener('click', () => {
body.classList.toggle('dark-mode');
if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Activer le Mode Clair';
    localStorage.setItem('darkMode', 'enabled');
} else {
    toggleButton.textContent = 'Activer le Mode Sombre';
    localStorage.setItem('darkMode', 'disabled');
}
});


document.getElementById('formulaire').addEventListener('submit', function(event) {
    event.preventDefault();
    const nom = document.getElementById('nom').value;
    const nombre = document.getElementById('nbPersonne').value;
    if (nom.length < 3) {
        alert("Le nom doit contenir au moins 3 caractères.");
        return;
    }
    const nombreInt = parseInt(nombre, 10);
    if (isNaN(nombreInt) || nombreInt <= 0 || nombre !== String(nombreInt)) {
        alert("Le nombre de personnes doit être un entier positif.");
        return;
    }
    alert("Formulaire validé !");
    event.target.submit();
});