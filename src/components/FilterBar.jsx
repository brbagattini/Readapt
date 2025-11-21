import { useState } from "react";

export default function FilterBar({ onApply }) {
  const [hard, setHard] = useState("");
  const [soft, setSoft] = useState("");
  const [area, setArea] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [interesse, setInteresse] = useState("");

  const aplicarFiltros = () => {
    onApply({
      hard,
      soft,
      area,
      localizacao,
      interesse
    });
  };

  return (
    <div className="filter-bar">
      <select value={hard} onChange={e => setHard(e.target.value)}>
        <option value="">Hard Skill</option>
        <option value="React">React</option>
        <option value="Node">Node</option>
        <option value="UI Design">UI Design</option>
        <option value="Python">Python</option>
        <option value="Cloud">Cloud</option>
      </select>

      <select value={soft} onChange={e => setSoft(e.target.value)}>
        <option value="">Soft Skill</option>
        <option value="Comunicação">Comunicação</option>
        <option value="Liderança">Liderança</option>
        <option value="Trabalho em equipe">Trabalho em equipe</option>
        <option value="Proatividade">Proatividade</option>
      </select>

      <select value={area} onChange={e => setArea(e.target.value)}>
        <option value="">Área</option>
        <option value="Design">Design</option>
        <option value="Full Stack">Full Stack</option>
        <option value="Data Science">Data Science</option>
        <option value="Backend">Backend</option>
      </select>

      <select value={localizacao} onChange={e => setLocalizacao(e.target.value)}>
        <option value="">Localização</option>
        <option value="São Paulo">São Paulo</option>
        <option value="Curitiba">Curitiba</option>
        <option value="Rio de Janeiro">Rio de Janeiro</option>
        <option value="Porto Alegre">Porto Alegre</option>
      </select>

      <select value={interesse} onChange={e => setInteresse(e.target.value)}>
        <option value="">Interesse</option>
        <option value="Tecnologia">Tecnologia</option>
        <option value="Design">Design</option>
        <option value="Pesquisa">Pesquisa</option>
      </select>

      <button className="filter-btn" onClick={aplicarFiltros}>
        Aplicar
      </button>
    </div>
  );
}
