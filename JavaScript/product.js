document.getElementById('add-to-cart-button').addEventListener('click', function(event) {
    event.preventDefault(); // Pour empêcher le comportement par défaut du formulaire

    // Récupérer la valeur sélectionnée dans le menu déroulant de la taille
    var selectedSize = document.getElementById('size').value;
    var sizeError = document.getElementById('size-error');

    // Vérifier si la taille sélectionnée est différente de "SELECTIONNER TAILLE"
    if (selectedSize !== 'small') {
        sizeError.style.display = 'none'; // Cacher le message d'erreur s'il est affiché
        alert('Le produit a été ajouté au panier.');
    } else {
        sizeError.style.display = 'block'; // Afficher le message d'erreur
    }
});