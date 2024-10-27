'use client';

import { useEffect, useState } from 'react';
import { PokedexTable } from '../../components/PokedexTable';

export default function PokedexPage() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch('/api/pokemon');
      const data = await response.json();
      setPokemonList(data);
    }
    fetchPokemon();
  }, []);

  return (
    <main>
      <h1>Pokedex</h1>
      <PokedexTable pokemonArray={pokemonList} />
    </main>
  );
}
