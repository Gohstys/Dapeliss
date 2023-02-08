let searchButton = document.getElementById("searchButton");
if (searchButton) {
  searchButton.addEventListener("click", function () {
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", function () {
      const searchInput = document.getElementById("searchInput").value;
      console.log("Búsqueda realizada: " + searchInput);

      // Aquí debes agregar la lógica para buscar las películas
      // que coincidan con la búsqueda

      // Aquí debes mostrar los resultados de la búsqueda en la lista
      const movieList = document.getElementById("movie-card");
      movieList.innerHTML = ""; // Vacía la lista antes de mostrar los resultados
      for (let i = 0; i < searchResults.length; i++) {
        movieList.innerHTML += "<li>" + searchResults[i] + "</li>";
      }
    });
  });
} else {
  console.error("No se ha encontrado un elemento con el identificador 'searchButton'");
}


$("#inputBusqueda").keyup(function () {
  var consulta = $("#searchTabla").DataTable();
  consulta.search($(this).val()).draw();

  if ($("#inputBusqueda").val() == "") {
    $(".resultados").css({
      "height": "auto",
      "background": "none"
    });

    $("#search").hide();

  } else {
    $("#search").fadeIn("fast");
  }
});