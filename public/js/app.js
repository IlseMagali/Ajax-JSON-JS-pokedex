var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (e) {
	if (this.readyState === 4) {
		if (this.status === 200) {
			var response = JSON.parse(this.response);
			var pokemons = response.results;
			crearPokemons(pokemons);
			// var squads = JSON.parse(this.response);
			// crearSquads(squads);
		}
	}
};

xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/");

xhr.send();

function crearPokemons(pokemons) {
	// var ul = document.getElementById("pokemons");
	//
	// pokemons.forEach(function (pokemon) {
	// 	var li = document.createElement("li");
	// 	li.textContent = pokemon.name;
	// 	ul.appendChild(li);
	// });
	var contenedor = document.getElementById("contenedor")

	pokemons.forEach(function (pokemon){
		var divPoke = document.createElement("div");
		var imgPoke = document.createElement("img");
		var nombreSpan = document.createElement("span");

		divPoke.classList.add("pokeDiv");

		nombreSpan.textContent = pokemon.name;

		divPoke.appendChild(nombreSpan);
		contenedor.appendChild(divPoke);
	});
}

// Constructor de pokemon
function pokemon(name, species){
	this.nombre = name;
	this.especie = species;
}
