import { useParams } from "react-router-dom";
import { useState } from "react";


export default function PerfilProfissional() {
  const { id } = useParams();

  const profissionais = [
    {
      id: 1,
      nome: "Lucas Andrade",
      cargo: "UX Designer",
      foto: "https://picsum.photos/300/300?1",
      resumo: "Designer focado em interfaces modernas, pesquisa de usuário e experiência digital.",
      localizacao: "Rio de Janeiro, Brasil",
      area: "Design · UX/UI",

      hardSkills: ["Figma", "Wireframes", "Prototipagem", "Design System"],
      softSkills: ["Comunicação", "Empatia", "Trabalho em equipe"],

      experiencias: [
        {
          empresa: "TechDesign",
          inicio: "2020",
          fim: "2023",
          descricao: "Criação de interfaces e condução de testes de usabilidade."
        }
      ],

      formacao: [
        {
          curso: "Design Digital",
          instituicao: "PUC Rio",
          ano: "2019"
        }
      ],

      projetos: [
        {
          titulo: "Redesign Plataforma X",
          link: "https://example.com",
          descricao: "Projeto de melhoria de UX para aumentar conversão."
        }
      ],

      certificacoes: ["UX Research Avançado (Alura)", "Design Thinking (Google)"],

      idiomas: [
        { idioma: "Inglês", nivel: "Avançado" },
        { idioma: "Espanhol", nivel: "Intermediário" }
      ],

      areaInteresses: ["Tecnologia", "Psicologia Cognitiva"]
    },

    // COPIE ESTES CAMPOS PARA OS OUTROS PERFIS TAMBÉM
    {
      id: 2,
      nome: "Marina Lopes",
      cargo: "Full Stack Developer",
      foto: "https://picsum.photos/300/300?2",
      resumo: "Desenvolvedora especialista em React e Node.js, apaixonada por resolver problemas.",
      localizacao: "São Paulo, Brasil",
      area: "Tecnologia · Full Stack",

      hardSkills: ["React", "Node", "MongoDB", "Docker"],
      softSkills: ["Liderança", "Comunicação"],

      experiencias: [
        {
          empresa: "DevSolutions",
          inicio: "2021",
          fim: "2024",
          descricao: "Desenvolvimento full-stack com foco em escalabilidade."
        }
      ],

      formacao: [
        {
          curso: "Engenharia de Software",
          instituicao: "USP",
          ano: "2020"
        }
      ],

      projetos: [
        {
          titulo: "Sistema de Delivery",
          link: "https://example.com",
          descricao: "Aplicação completa com painel administrativo e entrega."
        }
      ],

      certificacoes: ["React Professional Certification", "AWS Cloud Practitioner"],

      idiomas: [
        { idioma: "Inglês", nivel: "Fluente" },
        { idioma: "Francês", nivel: "Básico" }
      ],

      areaInteresses: ["Cloud", "Inovação", "IA"]
    }
  ];

  const profissional = profissionais.find(p => p.id === Number(id));
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [connected, setConnected] = useState(false);
const sendMessage = () => {
  if (currentMessage.trim() === "") return;

  setChatMessages(prev => [...prev, currentMessage]);
  setCurrentMessage("");

  setTimeout(() => {
    const chatBox = document.querySelector(".chat-messages");
    if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
  }, 50);
};


  if (!profissional) return <h1>Profissional não encontrado</h1>;

  return (
  <div className="perfil-full-container">

    {/* CHAT MODAL */}
{showChat && (
  <div className="chat-modal">
    <div className="chat-box">

      <div className="chat-header">
        <h3>Chat com {profissional.nome}</h3>
        <button className="close-chat" onClick={() => setShowChat(false)}>✖</button>
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

    {/* HEADER + BOTÕES */}
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

        {/* BOTÕES */}
        <div className="perfil-actions">
          <button 
  className={`connect-btn ${connected ? "connected" : ""}`}
  onClick={() => !connected && setConnected(true)}
>
  {connected ? "Conexão enviada ✓" : "Conectar"}
</button>

          <button 
  className="msg-btn"
  onClick={() => setShowChat(true)}
>
  Mensagens
</button>

        </div>
      </div>
    </div>


      {/* HARD SKILLS */}
      <section>
        <h2>Hard Skills</h2>
        <div className="tag-list">
          {profissional.hardSkills.map((s, i) => (
            <span key={i} className="tag">{s}</span>
          ))}
        </div>
      </section>

      {/* SOFT SKILLS */}
      <section>
        <h2>Soft Skills</h2>
        <div className="tag-list">
          {profissional.softSkills.map((s, i) => (
            <span key={i} className="tag">{s}</span>
          ))}
        </div>
      </section>

      {/* EXPERIÊNCIAS */}
      <section>
        <h2>Experiências</h2>
        {profissional.experiencias.map((exp, i) => (
          <div key={i} className="card-block">
            <h3>{exp.empresa} ({exp.inicio} - {exp.fim})</h3>
            <p>{exp.descricao}</p>
          </div>
        ))}
      </section>

      {/* FORMAÇÃO */}
      <section>
        <h2>Formação</h2>
        {profissional.formacao.map((f, i) => (
          <div key={i} className="card-block">
            <h3>{f.curso}</h3>
            <p>{f.instituicao} — {f.ano}</p>
          </div>
        ))}
      </section>

      {/* PROJETOS */}
      <section>
        <h2>Projetos</h2>
        {profissional.projetos.map((p, i) => (
          <div key={i} className="card-block">
            <h3>{p.titulo}</h3>
            <a href={p.link} target="_blank">{p.link}</a>
            <p>{p.descricao}</p>
          </div>
        ))}
      </section>

      {/* CERTIFICAÇÕES */}
      <section>
        <h2>Certificações</h2>
        <ul>
          {profissional.certificacoes.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>

      {/* IDIOMAS */}
      <section>
        <h2>Idiomas</h2>
        {profissional.idiomas.map((l, i) => (
          <p key={i}><strong>{l.idioma}</strong>: {l.nivel}</p>
        ))}
      </section>

      {/* ÁREA DE INTERESSE */}
      <section>
        <h2>Áreas de Interesse</h2>
        <div className="tag-list">
          {profissional.areaInteresses.map((a, i) => (
            <span key={i} className="tag">{a}</span>
          ))}
        </div>
      </section>

    </div>
  );
}
