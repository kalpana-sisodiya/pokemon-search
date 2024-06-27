import { useState } from "react";
import { FiLoader } from "react-icons/fi";

import PokemonList from "../components/PokemonList";
import PokemonSearch from "../components/PokemonFormFilter";
import usePokemonList from "../hooks/usePokemonList";

const Home = () => {
  const [selectedType, setSelectedType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { pokemonList, loading } = usePokemonList(selectedType, searchTerm);

  return (
    <>
      <PokemonSearch
        setSelectedType={setSelectedType}
        setSearchTerm={setSearchTerm}
        selectedType={selectedType}
      />

      {loading ? (
        <div className="text-center mt-4">
          <FiLoader className="animate-spin h-8 w-8 inline" /> Loading...
        </div>
      ) : (
        <PokemonList pokemonList={pokemonList} loading={loading} />
      )}
    </>
  );
};

export default Home;
