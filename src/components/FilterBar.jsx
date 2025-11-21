import { useState } from "react";

export default function FilterBar({ onApply }) {
  const [hard, setHard] = useState("");
  const [soft, setSoft] = useState("");
  const [area, setArea] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [interesse, setInteresse] = useState("");

  const aplicarFiltros = () => {
    onApply({ hard, soft, area, localizacao, interesse });
  };

  return (
    <div className="filter-bar">

      {/* HARD SKILLS */}
      <select value={hard} onChange={e => setHard(e.target.value)}>
        <option value="">Hard Skill</option>
        <option value="React">React</option>
        <option value="Node">Node</option>
        <option value="Figma">Figma</option>
        <option value="Python">Python</option>
        <option value="SQL">SQL</option>
        <option value="AWS">AWS</option>
        <option value="Terraform">Terraform</option>
        <option value="Scrum">Scrum</option>
        <option value="Java">Java</option>
        <option value="Cypress">Cypress</option>
        <option value="PostgreSQL">PostgreSQL</option>
        <option value="Microserviços">Microserviços</option>
        <option value="Flutter">Flutter</option>
        <option value="Ads">Ads</option>
        <option value="TF">TF</option>
        <option value="Kali">Kali</option>
        <option value="Vue">Vue</option>
        <option value="Unity">Unity</option>
        <option value="C#">C#</option>
        <option value="Illustrator">Illustrator</option>
        <option value="Kubernetes">Kubernetes</option>
        <option value="PowerBI">PowerBI</option>
        <option value="Spark">Spark</option>
      </select>

      {/* SOFT SKILLS */}
      <select value={soft} onChange={e => setSoft(e.target.value)}>
        <option value="">Soft Skill</option>
        <option value="Comunicação">Comunicação</option>
        <option value="Liderança">Liderança</option>
        <option value="Empatia">Empatia</option>
        <option value="Análise">Análise</option>
        <option value="Colaboração">Colaboração</option>
        <option value="Organização">Organização</option>
        <option value="Criatividade">Criatividade</option>
        <option value="Detalhismo">Detalhismo</option>
        <option value="Pensamento crítico">Pensamento crítico</option>
        <option value="Resiliência">Resiliência</option>
      </select>

      {/* ÁREA */}
      <select value={area} onChange={e => setArea(e.target.value)}>
        <option value="">Área</option>
        <option value="Dev">Desenvolvimento</option>
        <option value="Dados">Dados</option>
        <option value="Design">Design</option>
        <option value="DevOps">DevOps</option>
        <option value="Produto">Produto</option>
        <option value="Segurança">Segurança</option>
        <option value="Qualidade">Qualidade</option>
        <option value="IA">IA</option>
        <option value="Infra">Infra</option>
        <option value="Marketing">Marketing</option>
        <option value="Games">Games</option>
        <option value="RH">RH</option>
        <option value="Arquitetura">Arquitetura</option>
        <option value="Tecnologia">Tecnologia</option>
      </select>

      <select value={localizacao} onChange={e => setLocalizacao(e.target.value)}>
        <option value="">Localização</option>
        <option value="SP">São Paulo</option>
        <option value="PR">Paraná</option>
        <option value="PE">Pernambuco</option>
        <option value="MG">Minas Gerais</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="SC">Santa Catarina</option>
        <option value="CE">Ceará</option>
        <option value="GO">Goiás</option>
        <option value="DF">Distrito Federal</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="BA">Bahia</option>
        <option value="AM">Amazonas</option>
      </select>
      
      <select value={interesse} onChange={e => setInteresse(e.target.value)}>
        <option value="">Interesse</option>
        <option value="Educação">Educação</option>
        <option value="ML">Machine Learning</option>
        <option value="Design">Design</option>
        <option value="Infra">Infraestrutura</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="QA">Qualidade</option>
        <option value="Forense">Forense</option>
        <option value="FullStack">FullStack</option>
        <option value="Mobile">Mobile</option>
        <option value="Growth">Growth</option>
        <option value="Acessibilidade">Acessibilidade</option>
        <option value="Pessoas">Pessoas</option>
        <option value="DL">Deep Learning</option>
        <option value="Games">Games</option>
        <option value="DevOps">DevOps</option>
        <option value="Cloud">Cloud</option>
        <option value="Arquitetura">Arquitetura</option>
      </select>

      <button className="filter-btn" onClick={aplicarFiltros}>
        Aplicar
      </button>
    </div>
  );
}
