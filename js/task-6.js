function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Get elements from the DOM
const inputEl = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// Function to create a collection of div elements
function createBoxes(amount) {
  // Clear existing elements before creating new ones
  destroyBoxes();

  // Validate the input value (should be between 1 and 100)
  if (amount < 1 || amount > 100) return;

  const elements = [];
  let size = 30; // Initial box size

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    box.style.display = "inline-block";
    elements.push(box);
    size += 10; // Increase size by 10px for each next box
  }

  // Append all created elements to the boxes container
  boxesContainer.append(...elements);
}

// Function to clear all elements inside the boxes container
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

// Event listener for the create button
createBtn.addEventListener("click", () => {
  const amount = parseInt(inputEl.value.trim(), 10);
  createBoxes(amount);
  inputEl.value = ""; // Clear input after rendering
});

// Event listener for the destroy button
destroyBtn.addEventListener("click", destroyBoxes);