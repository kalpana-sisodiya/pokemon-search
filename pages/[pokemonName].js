import axios from "axios";

import PokemonCard from "../components/PokemonCard";
import Breadcrumb from "../components/ui/Breadcrumb";
import BackButton from "../components/ui/BackButton";

const PokemonDetails = ({ pokemon }) => {
  return (
    <>
      <BackButton />
      <Breadcrumb name={pokemon.name} />
      <PokemonCard pokemon={pokemon} />
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { pokemonName } = ctx.params;
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  return {
    props: {
      pokemon: response.data,
    },
  };
}

export default PokemonDetails;
