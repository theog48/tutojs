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
