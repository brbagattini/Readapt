import { useEffect, useState } from "react";

export default function MeuPerfil() {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("perfilCompleto");

    if (data) {
      setPerfil(JSON.parse(data));
    } else {
      setPerfil({
        foto: "https://i.pravatar.cc/300",
        nome: "Seu nome",
        cargo: "Sua profissão",
        bio: "Escreva aqui sua bio...",
        localizacao: "Sua cidade",
        tags: ["Design · UX/UI"],
        hardSkills: ["Figma", "Prototipagem"],
        softSkills: ["Comunicação", "Trabalho em equipe"],
        experiencias: [
          {
            titulo: "Nome da Experiência",
            ano: "2020 - 2023",
            descricao: "Descreva suas responsabilidades..."
          }
        ],
        formacao: [
          {
            curso: "Curso",
            instituicao: "Instituição",
            ano: "2019"
          }
        ],
        projetos: [
          {
            titulo: "Projeto",
            link: "https://exemplo.com",
            descricao: "Descreva o projeto..."
          }
        ],
        certificacoes: ["UX Research (Alura)", "Design Thinking (Google)"],
        idiomas: ["Inglês: Avançado"],
        areasInteresse: ["Tecnologia", "Psicologia Cognitiva"]
      });
    }
  }, []);

  function salvar() {
    localStorage.setItem("perfilCompleto", JSON.stringify(perfil));
    alert("Perfil salvo!");
  }

  function atualizar(campo, valor) {
    setPerfil((prev) => ({ ...prev, [campo]: valor }));
  }

  function adicionarLista(campo, item) {
    if (!item.trim()) return;
    setPerfil((prev) => ({
      ...prev,
      [campo]: [...prev[campo], item]
    }));
  }

  function removerItem(campo, index) {
    setPerfil((prev) => ({
      ...prev,
      [campo]: prev[campo].filter((_, i) => i !== index)
    }));
  }

  function alterarFoto(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => atualizar("foto", reader.result);
    reader.readAsDataURL(file);
  }

  if (!perfil) return <h1>Carregando perfil...</h1>;

  return (
    <div className="perfil-grande">

      {/* FOTO */}
      <label className="foto-wrapper">
        <img src={perfil.foto} alt="foto" className="foto-perfil" />
        <input type="file" onChange={alterarFoto} style={{ display: "none" }} />
      </label>

      {/* NOME + CARGO */}
      <h2>
        <input
          value={perfil.nome}
          onChange={(e) => atualizar("nome", e.target.value)}
          className="input-titulo"
        />
      </h2>

      <h3>
        <input
          value={perfil.cargo}
          onChange={(e) => atualizar("cargo", e.target.value)}
          className="input-sub"
        />
      </h3>

      {/* BIO */}
      <textarea
        className="input-bio"
        value={perfil.bio}
        onChange={(e) => atualizar("bio", e.target.value)}
      />

      {/* LOCALIZAÇÃO */}
      <input
        className="input-local"
        value={perfil.localizacao}
        onChange={(e) => atualizar("localizacao", e.target.value)}
      />

      {/* TAGS */}
      <div className="tags">
        {perfil.tags.map((t, i) => (
          <span key={i} className="tag" onClick={() => removerItem("tags", i)}>
            {t} ✕
          </span>
        ))}
      </div>

      <input
        placeholder="Adicionar tag..."
        onKeyDown={(e) => {
          if (e.key === "Enter") adicionarLista("tags", e.target.value);
        }}
        className="input-add"
      />

      {/* HARD SKILLS */}
      <h3>Hard Skills</h3>
      <div className="tags">
        {perfil.hardSkills.map((t, i) => (
          <span key={i} className="tag" onClick={() => removerItem("hardSkills", i)}>
            {t} ✕
          </span>
        ))}
      </div>

      <input
        placeholder="Adicionar Hard Skill..."
        onKeyDown={(e) => {
          if (e.key === "Enter") adicionarLista("hardSkills", e.target.value);
        }}
        className="input-add"
      />

      {/* SOFT SKILLS */}
      <h3>Soft Skills</h3>
      <div className="tags">
        {perfil.softSkills.map((t, i) => (
          <span key={i} className="tag" onClick={() => removerItem("softSkills", i)}>
            {t} ✕
          </span>
        ))}
      </div>

      <input
        placeholder="Adicionar Soft Skill..."
        onKeyDown={(e) => {
          if (e.key === "Enter") adicionarLista("softSkills", e.target.value);
        }}
        className="input-add"
      />

      {/* EXPERIÊNCIAS */}
      <h3>Experiências</h3>

      {perfil.experiencias.map((exp, i) => (
        <div key={i} className="box-exp">
          <input
            className="input-titulo"
            value={exp.titulo}
            onChange={(e) => {
              const novo = [...perfil.experiencias];
              novo[i].titulo = e.target.value;
              atualizar("experiencias", novo);
            }}
          />

          <input
            className="input-sub"
            value={exp.ano}
            onChange={(e) => {
              const novo = [...perfil.experiencias];
              novo[i].ano = e.target.value;
              atualizar("experiencias", novo);
            }}
          />

          <textarea
            className="input-bio"
            value={exp.descricao}
            onChange={(e) => {
              const novo = [...perfil.experiencias];
              novo[i].descricao = e.target.value;
              atualizar("experiencias", novo);
            }}
          />

          <button onClick={() => removerItem("experiencias", i)}>Remover</button>
        </div>
      ))}

      <button
        onClick={() =>
          adicionarLista("experiencias", {
            titulo: "Nova Experiência",
            ano: "",
            descricao: ""
          })
        }
      >
        + Adicionar Experiência
      </button>

      {/* SALVAR */}
      <button className="btn-salvar" onClick={salvar}>
        Salvar Perfil
      </button>
    </div>
  );
}
