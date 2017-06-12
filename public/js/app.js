var cargarPagina = function() {
	cargarPokemons();
  $(document).on("click", ".pokemon", mostrarDetallePokemon);
};

var cargarPokemons = function() {
  var url = "http://pokeapi.co/api/v2/pokemon-species/";
  // get es obtener data que puede ser dada como string o como quieran
  // el metodo mas adecuado es getJSON porque sé que el tipo de info recibido será JSON
  $.getJSON( url, function (response) {
    var pokemons = response.results;
    mostrarPokemon(pokemons);
  });

};

function mostrarPokemon(pokemons) {
	var $ul = $("#contenedor");
	pokemons.forEach(function (pokemon) {
		var $li =$("<li/>");
    $li.addClass("pokeDiv");
    $li.attr("data-url", pokemons.url);
    $li.text(pokemons.name);
    $ul.append($li);
	});
}

var plantillaPokemon = "<h1>Nombre pokemon:</h1>" +
"<ul>" +
	"<li>__color__</li>" +
	"<li>__genero__</li>" +
"</ul>";

var mostrarDetallePokemon = function () {
  var url = ($(this).data("url"));
  var $pokemonContenedor = $("#pokemonContenedor");
  $.getJSON(url, function (response) {
    $pokemonContenedor.html(
      plantillaPokemon.replace("__nombre__", response.name)
        .replace("__color__", response.color).replace("__genero__", response.gender)
    );
  });
};

$(document).ready(cargarPagina);
