const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('number');

// Add an event listener to the form on submit
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();
  
  // Validate the form fields
  if (usernameInput.value.trim() === '') {
    alert('Please enter a username');
    usernameInput.focus();
    return;
  }
  
  if (emailInput.value.trim() === '') {
    alert('Please enter an email address');
    emailInput.focus();
    return;
  } else if (!isValidEmail(emailInput.value.trim())) {
    alert('Please enter a valid email address');
    emailInput.focus();
    return;
  }
  
  if (numberInput.value.trim() === '') {
    alert('Please enter a phone number');
    numberInput.focus();
    return;
  } else if (!isValidPhoneNumber(numberInput.value.trim())) {
    alert('Please enter a valid phone number');
    numberInput.focus();
    return;
  }
  
  // If all fields are valid, submit the form
  form.submit();
});

// A function to validate email addresses
function isValidEmail(email) {
  // A basic email validation regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// A function to validate phone numbers
function isValidPhoneNumber(number) {
  // A basic phone number validation regular expression
  const numberRegex = /^\d{10}$/;
  return numberRegex.test(number);
}