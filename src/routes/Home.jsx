import { useRef } from "react";
import { useOutletContext } from "react-router-dom";
import ProfessionalCard from "../components/ProfessionalCard";

export default function Home() {
  const { search } = useOutletContext();
  const carouselRef = useRef(null);

  const profissionais = [
    { id: 1, nome: "Lucas Andrade", imagem: "https://picsum.photos/400/300?1", descricao: "UX Designer" },
    { id: 2, nome: "Marina Lopes", imagem: "https://picsum.photos/400/300?2", descricao: "Full Stack" },
    { id: 3, nome: "Rafael Torres", imagem: "https://picsum.photos/400/300?3", descricao: "Backend" },
    { id: 4, nome: "Julia Mendes", imagem: "https://picsum.photos/400/300?4", descricao: "Data Scientist" },
    { id: 5, nome: "João Vitor", imagem: "https://picsum.photos/400/300?5", descricao: "Mobile Developer" },
    { id: 6, nome: "Ana Silva", imagem: "https://picsum.photos/400/300?6", descricao: "Product Designer" },
    { id: 7, nome: "Bruno Santos", imagem: "https://picsum.photos/400/300?7", descricao: "Cloud Engineer" }
  ];

  const filtrados = profissionais.filter(p =>
    p.nome.toLowerCase().includes(search.toLowerCase()) ||
    p.descricao.toLowerCase().includes(search.toLowerCase())
  );

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="home-page">

      <h2 className="section-title">Profissionais:</h2>

      <div className="carousel-wrapper">
        <div className="cards-carousel" ref={carouselRef}>
          {filtrados.map(p => (
            <ProfessionalCard
              key={p.id}
              id={p.id}
              nome={p.nome}
              imagem={p.imagem}
              descricao={p.descricao}
            />
          ))}
        </div>

        {/* SETA NETFLIX */}
        <button className="carousel-arrow" onClick={scrollRight}>
          ➤
        </button>
      </div>

    </div>
  );
}
