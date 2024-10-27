// @ts-ignore
export const PokemonTypeSelection = ({ selectedType, selectType }) => {
    const types = ['grass', 'fire', 'water', 'electric', 'psychic', 'rock'];
  
    return (
      <div>
        <select
          value={selectedType || ''}
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
  