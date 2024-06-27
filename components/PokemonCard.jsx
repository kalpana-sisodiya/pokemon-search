import Image from "next/image";

const PokemonCard = ({ pokemon }) => {
  const types = pokemon?.types.map((e) => e.type.name)?.join(", ");
  const stats = pokemon?.stats.map((e) => e.stat.name)?.join(", ");
  const abilities = pokemon?.abilities.map((e) => e.ability.name)?.join(", ");
  const moves = pokemon?.moves.map((e) => e.move.name)?.join(", ");

  return (
    <div className="bg-customGreen max-w-[500px] mx-auto rounded-lg shadow-md">
      <div className="p-4">
        <Image
          src={pokemon?.sprites?.other["official-artwork"]?.front_default || ""} // Add Placeholder Image
          alt={pokemon.name}
          className="mx-auto mb-4"
          width="250"
          height="250"
        />
      </div>

      <div className="grid gap-2 bg-customYellow p-4 rounded-b-lg">
        <p className="capitalize">
          <span className="font-bold">Name:</span> {pokemon.name}
        </p>
        <p>
          <span className="font-bold">Type:</span> {types}
        </p>
        <p>
          <span className="font-bold">Stats:</span> {stats}
        </p>
        <p>
          <span className="font-bold">Abilities:</span> {abilities}
        </p>
        <p>
          <span className="font-bold">Some Moves:</span> {moves}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
