export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Pesquisar..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
