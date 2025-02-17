function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Get the button and span elements
const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

// Add an event listener to the button
changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor(); // Generate a new random color

  // Apply the color to the body background
  document.body.style.backgroundColor = randomColor;

  // Update the text content of the span to display the color
  colorSpan.textContent = randomColor;
});
