import { PokemonRow } from './PokemonRow';

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

interface PokedexTableProps {
  pokemonArray: Pokemon[];
}

export const PokedexTable: React.FC<PokedexTableProps> = ({ pokemonArray }) => (
  <div className="pokedex-table">
    {pokemonArray.map((pokemon: any) => (
      <PokemonRow key={pokemon.id} pokemon={pokemon} />
    ))}
  </div>
);
