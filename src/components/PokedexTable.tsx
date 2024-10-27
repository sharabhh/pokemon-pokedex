import { PokemonRow } from './PokemonRow';

// @ts-expect-error
export const PokedexTable = ({ pokemonArray }) => (
  <div className="pokedex-table">
    {pokemonArray.map((pokemon: any) => (
      <PokemonRow key={pokemon.id} pokemon={pokemon} />
    ))}
  </div>
);
