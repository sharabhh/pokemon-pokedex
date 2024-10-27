import { PokemonRow } from './PokemonRow';

export const PokedexTable = ({ pokemonArray }) => (
  <div className="pokedex-table">
    {pokemonArray.map((pokemon) => (
      <PokemonRow key={pokemon.id} pokemon={pokemon} />
    ))}
  </div>
);
