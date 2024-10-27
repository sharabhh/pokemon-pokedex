// src/components/PokemonRow.tsx
import React from 'react';
import styles from './PokemonRow.module.css'

interface Pokemon {
  id: number;
  name: string;
  types: string[]; // Expecting types to be an array of strings
  sprite: string;
}

interface PokemonRowProps {
  pokemon: Pokemon | null; // pokemon can be null if not found
}

export const PokemonRow: React.FC<PokemonRowProps> = ({ pokemon }) => {
  if (!pokemon) {
    return <div>No Pokémon found</div>; // Display a message if no Pokémon is passed
  }
  console.log('from frontend',Array.isArray(pokemon.types));
  


  return (
    <div className={styles["pokemon-row"]}>
      <h3>{pokemon.name}</h3>
      {/* <p>ID: {pokemon.id}</p> */}
      <p>Types: {pokemon.types}</p> {/* Display types */}
      <img src={pokemon.sprite} alt={`${pokemon.name} sprite`} />
    </div>
  );
};
