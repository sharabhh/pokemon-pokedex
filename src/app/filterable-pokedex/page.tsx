'use client';

import { useState, useEffect } from 'react';
import { PokemonTypeSelection } from '../../components/PokemonTypeSelection';
import { PokedexTable } from '../../components/PokedexTable';

export default function FilterablePokedexPage() {
  const [selectedType, setSelectedType] = useState<string | undefined>();
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    async function fetchFilteredPokemon() {
      const typeParam = selectedType ? `?type=${selectedType}` : '';
      const response = await fetch(`/api/pokemon${typeParam}`);
      const data = await response.json();
      setFilteredPokemon(data);
    }

    fetchFilteredPokemon();
  }, [selectedType]);

  return (
    <main>
      <h1>Filterable Pokedex</h1>
      <PokemonTypeSelection selectedType={selectedType} selectType={setSelectedType} />
      <PokedexTable pokemonArray={filteredPokemon} />
    </main>
  );
}
