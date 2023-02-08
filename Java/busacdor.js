const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsList = document.getElementById("results-list");

const data = [
  { name: "Película 1", description: "Descripción 1" },
  { name: "Película 2", description: "Descripción 2" },
  { name: "Película 3", description: "Descripción 3" }
];

searchButton.addEventListener("click", (event) => {
  event.preventDefault();

  const searchTerm = searchInput.value.toLowerCase();
  const results = data.filter((item) => item.name.toLowerCase().includes(searchTerm));

  resultsList.innerHTML = "";
  for (const result of results) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${result.name}</strong>: ${result.description}`;
    resultsList.appendChild(listItem);
  }
});