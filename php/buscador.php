<?php
if (isset($_POST['searchTerm'])) {
  $searchTerm = $_POST['searchTerm'];

  // Aquí puede escribir el código para buscar las películas en una base de datos o un archivo
  // Y mostrar los resultados

  echo "Resultados de la búsqueda para '$searchTerm':";
  // ...
}
?>

<!-- zona de pruebas-->

<!--mas test net-->
<?php
// Get the search query from the form
$query = $_GET['query'];

// Build the API request URL
$url = "http://www.imdb.com/xml/find?json=1&nr=1&tt=on&q=" . urlencode($query);

// Send the API request
$response = file_get_contents($url);

// Decode the JSON response
$data = json_decode($response, true);

// Get the list of movie results
$movies = $data['d'];

// Loop through the movie results
foreach ($movies as $movie) {
  // Display the movie title and year
  echo $movie['l'] . " (" . $movie['y'] . ")<br>";
}
?>