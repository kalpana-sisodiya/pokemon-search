import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const PokemonList = ({ pokemonList, loading }) => {
  return (
    <div>
      {pokemonList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6">
          {pokemonList.map((pokemon) => (
            <Link
              key={pokemon.name}
              href={`/${pokemon.name}`}
              className="bg-customGray-light rounded-lg shadow-md"
            >
              <div className="bg-white p-5 rounded-tr-lg rounded-tl-lg">
                <Image
                  src={
                    pokemon?.sprites?.other["official-artwork"]
                      ?.front_default || ""
                  } // Add Placeholder Image
                  alt={pokemon.name}
                  className="mx-auto"
                  width="150"
                  height="150"
                />
              </div>

              <div className="p-6">
                <h2 className="font-bold capitalize mb-4">{pokemon.name}</h2>
                <p className="text-blue-500 mt-2">
                  <span className="inline">Details</span>
                  <FaArrowRightLong className="inline ml-1" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center font-bold">Sorry No Result Found</p>
      )}

      {loading && (
        <div className="text-center mt-4">
          <FiLoader className="animate-spin h-8 w-8 inline" /> Loading...
        </div>
      )}
    </div>
  );
};

export default PokemonList;
