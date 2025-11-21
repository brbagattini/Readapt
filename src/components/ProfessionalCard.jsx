import { Link } from "react-router-dom";

export default function ProfessionalCard({ id, nome, imagem, descricao, localizacao, area }) {
  return (
    <Link to={`/perfil/${id}`} className="tech-card">
      
      <img src={imagem} alt={nome} className="tech-card-img" />

      <div className="tech-card-box">
        <h3>{nome}</h3>
      </div>

      <div className="tech-card-box desc-box">
        <p>{descricao}</p>
      </div>

      <div className="tech-card-row">
        <div className="tech-card-small">
          <strong>Localização</strong>
          <p>{localizacao}</p>
        </div>

        <div className="tech-card-small">
          <strong>Área</strong>
          <p>{area}</p>
        </div>
      </div>

    </Link>
  );
}
