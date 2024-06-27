import axios from "axios";
import { useState, useEffect } from "react";

const usePokemonTypes = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/type");
      setTypes(response.data.results);
    };

    fetchTypes();
  }, []);

  return types;
};

export default usePokemonTypes;
