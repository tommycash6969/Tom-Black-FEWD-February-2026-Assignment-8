const backLink = document.getElementById('back-link');
if (backLink && new URLSearchParams(window.location.search).get('ref') === 'banner') {
  backLink.href = '../index.html#contact-banner';
}

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

const modal = document.getElementById('submission-modal');
const closeModalButton = document.getElementById('close-modal');

const modalName = document.getElementById('modal-name');
const modalEmail = document.getElementById('modal-email');
const modalMessage = document.getElementById('modal-message');

function setFieldState(field, isValid) {
  field.classList.remove('is-valid', 'is-invalid');
  field.classList.add(isValid ? 'is-valid' : 'is-invalid');
  field.setAttribute('aria-invalid', String(!isValid));

  const helperText = document.getElementById(field.id + '-helper');
  if (helperText) {
    helperText.classList.toggle('is-hidden', isValid);
  }
}

function validateName() {
  const value = nameInput.value.trim();
  const lettersOnly = /^[A-Za-z\s]+$/;

  if (!value) {
    nameError.textContent = 'Name is required.';
    setFieldState(nameInput, false);
    return false;
  }

  if (!lettersOnly.test(value)) {
    nameError.textContent = 'Name must contain letters only.';
    setFieldState(nameInput, false);
    return false;
  }

  nameError.textContent = '';
  setFieldState(nameInput, true);
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value) {
    emailError.textContent = 'Email is required.';
    setFieldState(emailInput, false);
    return false;
  }

  if (!emailPattern.test(value)) {
    emailError.textContent = 'Enter a valid email format.';
    setFieldState(emailInput, false);
    return false;
  }

  emailError.textContent = '';
  setFieldState(emailInput, true);
  return true;
}

function validateMessage() {
  const value = messageInput.value.trim();

  if (!value) {
    messageError.textContent = 'Message is required.';
    setFieldState(messageInput, false);
    return false;
  }

  if (value.length < 10) {
    messageError.textContent = 'Message must be at least 10 characters.';
    setFieldState(messageInput, false);
    return false;
  }

  messageError.textContent = '';
  setFieldState(messageInput, true);
  return true;
}

function openModal() {
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  if (!isNameValid || !isEmailValid || !isMessageValid) {
    return;
  }

  modalName.textContent = nameInput.value.trim();
  modalEmail.textContent = emailInput.value.trim();
  modalMessage.textContent = messageInput.value.trim();

  openModal();
});

closeModalButton.addEventListener('click', closeModal);

modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }
});
