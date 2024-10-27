"use client";

import { useState } from "react";
import { PokemonRow } from "../components/PokemonRow";
import styles from "./page.module.css";

export default function HomePage() {
  const [pokemonName, setPokemonName] = useState("");
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`/api/pokemon/${pokemonName}`);
    const data = await response.json();
    setPokemon(data);
    if (data !== null) {
      setLoading(false);
    }
  };

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <main>
      <div className={styles["container"]}>
        <h1>Pokémon Lookup</h1>
        <form onSubmit={handleSubmit}>
          <input
            className={styles["input-box"]}
            type="text"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
            placeholder="Enter Pokémon name"
          />
          <button
            className={styles["search-btn"]}
            type="submit"
            onClick={handleClick}
          >
            Search
          </button>
          <span className={styles["info-box"]}>
            <p>
              Pokedex 1.0 is currently limited to only specific
              pokemons:&nbsp;pikachu, bulbasaur, squirtle, charmander,
              jigglypuff
            </p>
          </span>
        </form>
        {loading
          ? "searching pokedex...."
          : pokemon && <PokemonRow pokemon={pokemon} />}
      </div>
    </main>
  );
}
