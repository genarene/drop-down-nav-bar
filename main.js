import { list } from "./components/list.js";

// iif

(function () {

  // main div
  const dropdownDiv = document.querySelector(".dropdown");
  dropdownDiv.style.display = "flex";

  // home button
  const homeButton = document.createElement("button");
  const homeLink = document.createElement("a");
  homeLink.textContent = "Home";
  homeLink.classList.add("home");
  homeLink.href = "#";
  homeButton.appendChild(homeLink);
  dropdownDiv.appendChild(homeButton);

  // creating the lists
  const projectsList = list("projects", "projects", [
    "Weather App",
    "Todo list",
    "Library",
    "Etch A Sketch",
  ]);
  const productsList = list("products", "products", [
    "Cloud Services",
    "Schedule Tasks",
    "Book Marking",
    "Gaming",
  ]);
  dropdownDiv.appendChild(projectsList);
  dropdownDiv.appendChild(productsList);

 
 
  // initial load image
  const contentImage = newImages("image", images, imageIndex);
  imageDiv.appendChild(contentImage);
  containerDiv.appendChild(imageDiv);

 
    
})();
