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
    toggleButton.textContent = '🌕';
    localStorage.setItem('darkMode', 'enabled');
} else {
    toggleButton.textContent = '🌑';
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
// Récupère l'élément de la modale et l'image
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.getElementById('close-btn');

// Sélectionne toutes les images de la galerie
const images = document.querySelectorAll('.image_item img');

images.forEach(image => {
image.addEventListener('click', function() {
    modal.style.display = 'block';
    modalImage.src = image.src;
});
});
closeBtn.addEventListener('click', function() {
modal.style.display = 'none';
});
window.addEventListener('click', function(event) {
if (event.target === modal) {
    modal.style.display = 'none';
}
});

function toggleMenu() {
    var content = document.querySelector('.menuContent');
    var content1 = document.querySelector('.menuContent2');
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        if (content1.style.display === 'block') {
            content1.style.display = 'none';
        }
        content.style.display = 'block';
    }
}
function toggleMenu1() {
    var content = document.querySelector('.menuContent');
    var content1 = document.querySelector('.menuContent2');
    if (content1.style.display === 'block') {
        content1.style.display = 'none';
    } else {
        if (content.style.display === 'block') {
            content.style.display = 'none';
        }
        content1.style.display = 'block';
    }
}