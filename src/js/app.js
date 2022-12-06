import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");

  const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=10";
  let pokemons = [];

  const fetchPokemons = async () => {
    // const pokemonCount = 10;
    // const urlQueries = `?limit=${pokemonCount}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    pokemons.push(...data.results);
  };

  const createPokemonList = async () => {
    pokemons.forEach((pokemon) => {
      const pokemonEl = document.createElement("li");
      pokemonEl.innerText = pokemon.name;
      ul.appendChild(pokemonEl);
    });
  };

  const renderPokemons = async () => {
    await fetchPokemons();
    await createPokemonList();
  };

  renderPokemons();
});
