// Get the categories list
const categoriesList = document.querySelector("#categories");

// Get all <li> elements with the class "item" (categories)
const categoryItems = categoriesList.querySelectorAll(".item");

// Log the number of categories
console.log(`Number of categories: ${categoryItems.length}`);

// Iterate through each category and retrieve the necessary data
categoryItems.forEach((item) => {
  // Get the category title (text inside <h2>)
  const categoryTitle = item.querySelector("h2").textContent;

  // Get the number of nested <li> elements inside <ul> (items in the category)
  const categoryElementsCount = item.querySelectorAll("ul li").length;

  // Log the information in the console
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElementsCount}`);
});
