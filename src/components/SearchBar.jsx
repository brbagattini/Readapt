import { useState } from "react";

export default function SearchBar() {
  const [text, setText] = useState("");

  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Pesquisar..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
