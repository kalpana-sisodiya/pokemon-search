import { useState } from "react";
import { BsSearch } from "react-icons/bs";

import usePokemonTypes from "../hooks/usePokemonType";
import Select from "./ui/Select";

const PokemonSearch = ({ setSelectedType, setSearchTerm, selectedType }) => {
  const [inputValue, setInputValue] = useState("");
  const types = usePokemonTypes();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <form className="mb-8">
      <Select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        options={types}
        placeholder="Select Type"
      />

      <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm max-w-[500px] w-full">
        <span className="pl-3 text-gray-400">
          <BsSearch />
        </span>
        <input
          type="text"
          className="w-full px-3 py-2 border-0 focus:outline-none"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-button text-white rounded-tr-md rounded-br-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default PokemonSearch;
