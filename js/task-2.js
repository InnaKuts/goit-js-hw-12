const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Get the gallery <ul> element
const gallery = document.querySelector(".gallery");

// Create gallery markup using template literals
const galleryMarkup = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery-item"><img src="${url}" alt="${alt}" class="gallery-img"></li>`
  )
  .join("");

// Insert all images into the gallery in one operation
gallery.insertAdjacentHTML("beforeend", galleryMarkup);
