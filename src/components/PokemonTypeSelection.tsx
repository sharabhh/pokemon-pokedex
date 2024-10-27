interface PokemonTypeSelectionProps {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
}

export const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({
  selectedType,
  selectType,
}) => {
  const types = ["grass", "fire", "water", "electric", "psychic", "rock"];

  return (
    <div>
      <select
        value={selectedType || ""}
        onChange={(e) => selectType(e.target.value || undefined)}
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};
