import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProfissionaisAPI } from "../services/api";

export default function PerfilProfissional() {
  const { id } = useParams();

  const [profissional, setProfissional] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    async function carregar() {
      try {
        const p = await ProfissionaisAPI.getById(id);
        setProfissional(p);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, [id]);

  const sendMessage = () => {
    if (currentMessage.trim() === "") return;

    setChatMessages(prev => [...prev, currentMessage]);
    setCurrentMessage("");

    setTimeout(() => {
      const chatBox = document.querySelector(".chat-messages");
      if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
    }, 50);
  };

  if (loading) return <h1>Carregando...</h1>;
  if (!profissional) return <h1>Profissional não encontrado</h1>;

  return (
    <div className="perfil-full-container">

      {showChat && (
        <div className="chat-modal">
          <div className="chat-box">

            <div className="chat-header">
              <h3>Chat com {profissional.nome}</h3>
              <button className="close-chat" onClick={() => setShowChat(false)}>
                ✖
              </button>
            </div>

            <div className="chat-messages">
              {chatMessages.map((msg, index) => (
                <div key={index} className="chat-message user-msg">
                  {msg}
                </div>
              ))}
            </div>

            <div className="chat-input-area">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                value={currentMessage}
                onChange={e => setCurrentMessage(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendMessage()}
              />
              <button onClick={sendMessage} className="send-btn">Enviar</button>
            </div>

          </div>
        </div>
      )}

      <div className="perfil-header">
        <img src={profissional.foto} className="perfil-foto" />

        <div className="perfil-basic">
          <h1>{profissional.nome}</h1>
          <h3>{profissional.cargo}</h3>
          <p>{profissional.resumo}</p>

          <div className="perfil-basic-tags">
            <span>{profissional.localizacao}</span>
            <span>{profissional.area}</span>
          </div>

          <div className="perfil-actions">
            <button
              className="btn-conectar"
              onClick={() => {
                const conexoes = JSON.parse(localStorage.getItem("conexoes")) || [];

                if (!conexoes.find((c) => c.id === profissional.id)) {
                  conexoes.push(profissional);
                  localStorage.setItem("conexoes", JSON.stringify(conexoes));
                  alert("Conectado!");
                } else {
                  alert("Você já está conectado com esse profissional.");
                }
              }}
            >
              Conectar
            </button>

            <button className="msg-btn" onClick={() => setShowChat(true)}>
              Mensagens
            </button>
          </div>
        </div>
      </div>

      <section>
        <h2>Hard Skills</h2>
        <div className="tag-list">
          {profissional.habilidadesTecnicas?.map((s, i) => (
            <span key={i} className="tag">{s}</span>
          ))}
        </div>
      </section>
      
      <section>
        <h2>Soft Skills</h2>
        <div className="tag-list">
          {profissional.softSkills?.map((s, i) => (
            <span key={i} className="tag">{s}</span>
          ))}
        </div>
      </section>

      <section>
        <h2>Experiências</h2>
        {profissional.experiencias?.map((exp, i) => (
          <div key={i} className="card-block">
            <h3>{exp.empresa} ({exp.inicio} - {exp.fim})</h3>
            <p>{exp.descricao}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Formação</h2>
        {profissional.formacao?.map((f, i) => (
          <div key={i} className="card-block">
            <h3>{f.curso}</h3>
            <p>{f.instituicao} — {f.ano}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Projetos</h2>
        {profissional.projetos?.map((p, i) => (
          <div key={i} className="card-block">
            <h3>{p.titulo}</h3>
            <a href={p.link} target="_blank">{p.link}</a>
            <p>{p.descricao}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Certificações</h2>
        <ul>
          {profissional.certificacoes?.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Idiomas</h2>
        {profissional.idiomas?.map((l, i) => (
          <p key={i}><strong>{l.idioma}</strong>: {l.nivel}</p>
        ))}
      </section>

      <section>
        <h2>Áreas de Interesse</h2>
        <div className="tag-list">
          {profissional.areaInteresses?.map((a, i) => (
            <span key={i} className="tag">{a}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
