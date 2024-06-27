import { useState, useEffect } from "react";
import axios from "axios";

const usePokemonList = (selectedType, searchTerm) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    let url = `https://pokeapi.co/api/v2/pokemon?limit=120`;
    if (selectedType) {
      url = `https://pokeapi.co/api/v2/type/${selectedType}`;
    }

    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;

        let pokemons = [];
        if (selectedType) {
          pokemons = data?.pokemon.map((p) => p.pokemon);
        } else {
          pokemons = data?.results;
        }

        const filteredPokemons = pokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const pokemonDetailsPromises = filteredPokemons.map((pokemon) =>
          axios
            .get(pokemon.url)
            .then((res) => res.data)
            .catch((error) => {
              console.error(
                `Error fetching details for ${pokemon.name}:`,
                error
              );
              return null;
            })
        );

        const pokemonDetails = await Promise.all(pokemonDetailsPromises);
        setPokemonList(pokemonDetails.filter((detail) => detail !== null));
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, [selectedType, searchTerm]);

  return {
    pokemonList,
    loading,
    error,
  };
};

export default usePokemonList;
