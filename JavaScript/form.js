const form = document.getElementById('personal-info-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Reset error messages
  resetErrorMessages();

  // Validate email format
  const email = form.elements.email.value;
  if (!isValidEmail(email)) {
    showError('email', 'Veuillez entrer une adresse e-mail valide.');
    return;
  }

  // Validate password format (optional)

  // Validate telephone format
  const telephone = form.elements.telephone.value;
  if (!isValidTelephone(telephone)) {
    showError('telephone', 'Veuillez entrer un numéro de téléphone valide.');
    return;
  }

  // Validate other fields as needed

  // If all validations pass, show success message
  alert('Formulaire soumis avec succès !');

  // You can also submit the form programmatically if needed
  // form.submit();
});

// Function to validate email format using regex
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate telephone format using regex
function isValidTelephone(telephone) {
  // Accepts numbers in the format +xx xxxxxxxxxx or xxxxxxxxxx
  const telephoneRegex = /^(\+[0-9]{2}\s[0-9]{9}|[0-9]{10})$/;
  return telephoneRegex.test(telephone);
}

// Function to show error message under the input field
function showError(fieldName, errorMessage) {
  const errorElement = document.getElementById(`${fieldName}-error`);
  errorElement.textContent = errorMessage;
}

// Function to reset all error messages
function resetErrorMessages() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(message => message.textContent = '');
}