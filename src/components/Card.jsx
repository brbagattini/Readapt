import { Link } from "react-router-dom";

export default function Card({ id, nome, imagem, descricao }) {
  return (
    <Link to={`/perfil/${id}`} className="prof-card">
      <img src={imagem} alt={nome} className="prof-card-img" />

      <div className="prof-card-info">
        <h3>{nome}</h3>
        <p>{descricao}</p>
      </div>
    </Link>
  );
}
