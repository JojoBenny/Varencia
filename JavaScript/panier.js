const activateDrawingButton = document.getElementById('activate-drawing');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Fonction pour activer le dessin
function activateDrawing() {
    canvas.style.display = 'block'; // Afficher le canvas
}

// Écouter le clic sur le bouton d'activation du dessin
activateDrawingButton.addEventListener('click', activateDrawing);

// Gérer le dessin sur le canvas
let painting = false;

function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';

    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(mouseX, mouseY);
}

// Fonction pour effacer le contenu du canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Ajouter un écouteur d'événements au bouton pour effacer le canvas lorsqu'il est cliqué
activateDrawingButton.addEventListener('click', function() {
    activateDrawing(); // Activer le dessin
    clearCanvas(); // Effacer le canvas
});




canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);
