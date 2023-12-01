/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const articleElement = document.createElement("article");
    const h3Element = document.createElement("h3");
    const imgElement = document.createElement("img");

    h3Element.textContent = temple.templeName;
    imgElement.src = temple.imageUrl;
    imgElement.alt = temple.location;

    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);

    templesElement.appendChild(articleElement);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  );
  templeList = await response.json();
  displayTemples(templeList);
};
/* reset Function */
const reset = () => {
  templesElement.innerHTML = "";
};

/* sortBy Function */
const sortBy = function (temples) {
  reset();
  const filter = document.getElementById("sortBy").value;

  switch (filter) {
    case "utah":
      displayTemples(
        temples.filter((temple) => temple.location.includes("Utah"))
      );
      break;
    case "notutah":
      displayTemples(
        temples.filter((temple) => !temple.location.includes("Utah"))
      );
      break;
    case "older":
      const olderTemples = temples.filter(
        (temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)
      );
      displayTemples(olderTemples);
      break;
    case "all":
      displayTemples(temples);
      break;
    default:
      console.error("Invalid filter value");
  }
};

getTemples();

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});
