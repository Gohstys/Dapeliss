// const searchInput = document.getElementById("search-input");
//const searchButton = document.getElementById("search-button");
//const resultsList = document.getElementById("results-list");
//
//const data = [
//  { name: "Evangelion 1.0", description: "Evangelion 1.0" },
//  { name: "Evangelion 2.22", description: "Evangelion 2.22" },
//  { name: "Evangelion 3.0", description: "Evangelion 3.0" }
//];
//
//searchButton.addEventListener("click", (event) => {
//  event.preventDefault();
//
//  const searchTerm = searchInput.value.toLowerCase();
//  const results = data.filter((item) => item.name.toLowerCase().includes(searchTerm));
//
//  resultsList.innerHTML = "";
//  for (const result of results) {
//   const listItem = document.createElement("li");
//    listItem.innerHTML = `<strong>${result.name}</strong>: ${result.description}`;
//   resultsList.appendChild(listItem);
//  }
//}); 
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function() {
  const searchInput = document.getElementById("searchInput").value;
  console.log("Búsqueda realizada: " + searchInput);
  
  // Aquí debes agregar la lógica para buscar las películas
  // que coincidan con la búsqueda

  // Aquí debes mostrar los resultados de la búsqueda en la lista
  const movieList = document.getElementById("movieList");
  movieList.innerHTML = ""; // Vacía la lista antes de mostrar los resultados
  for (let i = 0; i < searchResults.length; i++) {
    movieList.innerHTML += "<li>" + searchResults[i] + "</li>";
  }
});