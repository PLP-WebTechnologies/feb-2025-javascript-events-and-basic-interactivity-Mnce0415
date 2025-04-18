const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let isValid = true;

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMessage.textContent = '';

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Valid email is required.';
    isValid = false;
  }

  if (messageInput.value.trim().length < 10) {
    messageError.textContent = 'Message must be at least 10 characters.';
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = 'Message sent successfully!';
    form.reset();
  }
});
