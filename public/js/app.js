var cargarPagina = function() {
	cargarPokemons();
  $(document).on("click", ".pokemon", mostrarDetallePokemon);
	$('.modal').modal();
};

var cargarPokemons = function() {
  var urlTodosPokemons = "https://pokeapi.co/api/v2/pokemon/";
  // get es obtener data que puede ser dada como string o como quieran
  // el metodo mas adecuado es getJSON porque sé que el tipo de info recibido será JSON
  $.getJSON( urlTodosPokemons, function (response) {
    var pokemons = response.results;
    crearPokemon(pokemons);
  });

};

function crearPokemon(pokemons) {
	var $contenedor = $("#contenedor");
	var $divRow = $("<div />");
	$divRow.addClass("row");

	pokemons.forEach(function (pokemon) {
		var urlIndividuo = pokemon.url;
		urlIndividuo = urlIndividuo.replace("pokemon", "pokemon-species");
		var $divCol = $("<div />", {"class": "col s3, pokemon","data-target": "pokemodal", "data-url":urlIndividuo, "data-nombre":pokemon.name});
		var $divCard = $("<div />", {"class": "card"});
		var $divCardImage = $("<div />", {"class": "card-image"});
		var $imagenPokemon = $("<img />", {"src": "https://dummyimage.com/150x150"});
		var $spanNombre = $("<span />");

		$spanNombre.text(pokemon.name);
		$divCardImage.append($imagenPokemon);
		$divCardImage.append($spanNombre);
		$divCard.append($divCardImage);
		$divCol.append($divCard);
		$divRow.append($divCol);
		$contenedor.append($divRow);
	});
}

var plantillaPokemon = "<div id='modal1' class='modal bottom-sheet center'>" +
	"<div class='modal-content'>" +
		"<img src='https://dummyimage.com/150x150' alt=''>" +
		"<h1>__nombre__</h1>" +
		"<p>Color: __color__</p>" +
		"<p>Hábitat: __habitat__</p>" +
		"<p>Especie: __shape__</p>" +
  "</div>";

var mostrarDetallePokemon = function () {
  var url = ($(this).data("url"));
  var $pokemonContenedorModal = $("#pokemodal");
  $.getJSON(url, function (response) {
    // $pokemonContenedorModal.html(
			// plantillaPokemon.text(
				$("#pokeNombre").text(response.name),
				$("#pokeColor").text("color:" + response.color.name),
				$("#pokeHabitat").text("habitat:" + response.habitat.name),
				$("#pokeEspecie").text("especie:" + response.shape.name),
			// )
      // plantillaPokemon.replace("__nombre__", response.name)
      //   .replace("__color__", response.color.name).replace("__habitat__", response.habitat.name)
			// 	.replace("__shape__", response.shape.name)
    // );
		console.log($pokemonContenedorModal);
  });

};

$(document).ready(cargarPagina);
