// Get the form element
const loginForm = document.querySelector(".login-form");

// Add an event listener for form submission
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload

  // Get form elements
  const { email, password } = event.target.elements;

  // Trim values to remove unnecessary spaces
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Check if both fields are filled
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  // Create an object with form data
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // Log the form data object to the console
  console.log(formData);

  // Reset the form
  loginForm.reset();
});

