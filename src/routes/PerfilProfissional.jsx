import { useParams } from "react-router-dom";

export default function PerfilProfissional() {
  const { id } = useParams();

  const profissionais = [
    {
      id: 1,
      nome: "Lucas Andrade",
      descricao: "UX Designer experiente em interfaces modernas.",
      foto: "https://picsum.photos/300/200?97",
      localizacao: "Rio de Janeiro, Brasil",
      area: "Design · UX/UI"
    },
    {
      id: 2,
      nome: "Marina Lopes",
      descricao: "Full Stack Developer especializada em React e Node.",
      foto: "https://i.pravatar.cc/300",
      localizacao: "São Paulo, Brasil",
      area: "Tecnologia · Full Stack"
    },
    {
      id: 3,
      nome: "Rafael Torres",
      descricao: "Especialista Backend focado em alta performance.",
      foto: "https://picsum.photos/300/200?77",
      localizacao: "Curitiba, Brasil",
      area: "Tecnologia · Backend"
    }
  ];

  const profissional = profissionais.find(p => p.id === Number(id));

  if (!profissional) return <h1>Profissional não encontrado</h1>;

  return (
    <div className="perfil-card">
      <img src={profissional.foto} className="perfil-card-foto" />

      <div className="perfil-card-box">
        <h2>{profissional.nome}</h2>
      </div>

      <div className="perfil-card-box">
        <p>{profissional.descricao}</p>
      </div>

      <div className="perfil-card-row">
        <div className="perfil-card-small">
          <strong>Localização</strong>
          <p>{profissional.localizacao}</p>
        </div>

        <div className="perfil-card-small">
          <strong>Área</strong>
          <p>{profissional.area}</p>
        </div>
      </div>
    </div>
  );
}
