import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MeuPerfil() {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("perfilCompleto");

    if (data) {
      const stored = JSON.parse(data);
      const conexoes = JSON.parse(localStorage.getItem("conexoes")) || [];

      setPerfil({
        ...stored,
        conexoes
      });
    } else {
      const defaultPerfil = {
        foto: "",
        nome: "Seu Nome",
        cargo: "Sua Profissão",
        bio: "Escreva aqui sua bio profissional...",
        localizacao: "Sua cidade",
        tags: ["UX/UI", "Design"],
        hardSkills: ["Figma", "UI Design"],
        softSkills: ["Empatia", "Comunicação"],
        experiencias: [
          {
            titulo: "Cargo / Experiência",
            ano: "2020 - 2023",
            descricao: "Descreva aqui sua experiência..."
          }
        ],
        formacao: [
          {
            curso: "Curso / Faculdade",
            instituicao: "Instituição",
            ano: "2019"
          }
        ],
        projetos: [
          {
            titulo: "Projeto",
            link: "#",
            descricao: "Descrição do projeto..."
          }
        ],
        certificacoes: ["Design Thinking", "UX Research"],
        idiomas: ["Inglês - Avançado"],
        areasInteresse: ["Psicologia Cognitiva", "Tecnologia"],
        conexoes: []
      };

      setPerfil(defaultPerfil);
      localStorage.setItem("perfilCompleto", JSON.stringify(defaultPerfil));
    }
  }, []);

  function atualizar(campo, valor) {
    setPerfil(prev => ({ ...prev, [campo]: valor }));
  }

  function salvar() {
    localStorage.setItem("perfilCompleto", JSON.stringify(perfil));
    localStorage.setItem("conexoes", JSON.stringify(perfil.conexoes));
    alert("Perfil salvo!");
  }

  function handleAdd(campo, item) {
    if (!item.trim()) return;
    setPerfil(prev => ({
      ...prev,
      [campo]: [...prev[campo], item]
    }));
  }

  function handleRemove(campo, index) {
    setPerfil(prev => ({
      ...prev,
      [campo]: prev[campo].filter((_, i) => i !== index)
    }));
  }

  function alterarFoto(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      atualizar("foto", reader.result);

      const updated = { ...perfil, foto: reader.result };
      localStorage.setItem("perfilCompleto", JSON.stringify(updated));
    };
    reader.readAsDataURL(file);
  }

  if (!perfil) return <h2>Carregando perfil...</h2>;

  return (
    <div className="perfil-grande">
      
      <label className="foto-wrapper">
        <img src={perfil.foto} alt="foto" className="foto-perfil" />
        <input type="file" onChange={alterarFoto} style={{ display: "none" }} />
      </label>

      <input
        className="input-titulo"
        value={perfil.nome}
        onChange={(e) => atualizar("nome", e.target.value)}
      />

      <input
        className="input-sub"
        value={perfil.cargo}
        onChange={(e) => atualizar("cargo", e.target.value)}
      />

      <textarea
        className="input-bio"
        value={perfil.bio}
        onChange={(e) => atualizar("bio", e.target.value)}
      />

      <input
        className="input-local"
        value={perfil.localizacao}
        onChange={(e) => atualizar("localizacao", e.target.value)}
      />

      <h3>Tags</h3>
      <div className="tags">
        {perfil.tags.map((t, i) => (
          <span key={i} className="tag" onClick={() => handleRemove("tags", i)}>
            {t} ✕
          </span>
        ))}
      </div>

      <input
        className="input-add"
        placeholder="Adicionar tag..."
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd("tags", e.target.value);
        }}
      />

      <h3>Hard Skills</h3>
      <div className="tags">
        {perfil.hardSkills.map((s, i) => (
          <span key={i} className="tag" onClick={() => handleRemove("hardSkills", i)}>
            {s} ✕
          </span>
        ))}
      </div>

      <input
        className="input-add"
        placeholder="Adicionar Hard Skill..."
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd("hardSkills", e.target.value);
        }}
      />

      <h3>Soft Skills</h3>
      <div className="tags">
        {perfil.softSkills.map((s, i) => (
          <span key={i} className="tag" onClick={() => handleRemove("softSkills", i)}>
            {s} ✕
          </span>
        ))}
      </div>

      <input
        className="input-add"
        placeholder="Adicionar Soft Skill..."
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd("softSkills", e.target.value);
        }}/>
      <h3>Experiências</h3>
      {perfil.experiencias.map((exp, i) => (
        <div key={i} className="box-exp">
          <input
            className="input-titulo"
            value={exp.titulo}
            onChange={(e) => {
              const temp = [...perfil.experiencias];
              temp[i].titulo = e.target.value;
              atualizar("experiencias", temp);
            }}
          />

          <input
            className="input-sub"
            value={exp.ano}
            onChange={(e) => {
              const temp = [...perfil.experiencias];
              temp[i].ano = e.target.value;
              atualizar("experiencias", temp);
            }}
          />

          <textarea
            className="input-bio"
            value={exp.descricao}
            onChange={(e) => {
              const temp = [...perfil.experiencias];
              temp[i].descricao = e.target.value;
              atualizar("experiencias", temp);
            }}
          />

          <button onClick={() => handleRemove("experiencias", i)}>Remover</button>
        </div>
      ))}

      <button
        onClick={() =>
          handleAdd("experiencias", {
            titulo: "Nova Experiência",
            ano: "",
            descricao: ""
          })
        }
      >+ Adicionar Experiência</button>
      <h3>Suas Conexões</h3>

      <div className="conexoes-container">
        {perfil.conexoes.length > 0 ? (
          perfil.conexoes.map((c, i) => (
            <div key={i} className="conexao-card">
              <img src={c.imagem || c.foto} className="conexao-foto" />

              <div>
                <h4>{c.nome}</h4>
                <Link className="ver-link" to={`/perfil/${c.id}`}>
                  Ver perfil →
                </Link>
              </div>

              <button
                className="btn-remover"
                onClick={() => handleRemove("conexoes", i)}
              >
                ✕
              </button>
            </div>
          ))
        ) : (
          <p>Nenhuma conexão ainda.</p>
        )}
      </div>

      <button className="btn-salvar" onClick={salvar}>
        Salvar Perfil
      </button>
    </div>
  );
}
