import { useParams } from "react-router-dom";

export default function PerfilProfissional() {
  const { id } = useParams();

  const profissional = {
    nome: "Marina Lopes",
    descricao: "Desenvolvedora Full Stack especializada em React e Node.js.",
    foto: "https://i.pravatar.cc/300",
    localizacao: "São Paulo, Brasil",
    area: "Tecnologia · Full Stack"
  };

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
