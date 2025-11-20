import ProfessionalCard from "../components/ProfessionalCard";
export default function Home() {
  const profissionais = [
    {
      id: 1,
      nome: "Lucas Andrade",
      imagem: "https://picsum.photos/300/200?97",
      descricao: "Designer UX/UI"
    },
    {
      id: 2,
      nome: "Marina Lopes",
      imagem: "https://picsum.photos/300/200?88",
      descricao: "Programadora Full Stack"
    }
  ];

  return (
    <div className="home-page">
      <h2>Profissionais Recomendados:</h2>
      <div className="cards-carousel">
        {profissionais.map((p) => (
          <ProfessionalCard
            key={p.id}
            id={p.id}
            nome={p.nome}
            imagem={p.imagem}
            descricao={p.descricao}
          />
        ))}
        <div className="carousel-arrow">➤</div>
      </div>
    </div>
  );
}
