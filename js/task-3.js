// Get input and output elements
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Listen for the input event
nameInput.addEventListener("input", (event) => {
  // Trim spaces and update the span text
  const trimmedValue = event.target.value.trim();
  nameOutput.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});
