import { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ProfessionalCard from "../components/ProfessionalCard";
import FilterBar from "../components/FilterBar";

export default function Home() {
  const { search } = useOutletContext();
  const [filtros, setFiltros] = useState({});
  const carouselRef = useRef(null);

  const profissionais = [
    { id: 1, nome: "Lucas Andrade", imagem: "https://picsum.photos/400/300?1", descricao: "UX Designer", hard: "UI Design", soft: "Comunicação", area: "Design", localizacao: "Rio de Janeiro", interesse: "Design" },
    { id: 2, nome: "Marina Lopes", imagem: "https://picsum.photos/400/300?2", descricao: "Full Stack", hard: "React", soft: "Liderança", area: "Full Stack", localizacao: "São Paulo", interesse: "Tecnologia" },
    { id: 3, nome: "Rafael Torres", imagem: "https://picsum.photos/400/300?3", descricao: "Backend", hard: "Node", soft: "Proatividade", area: "Backend", localizacao: "Curitiba", interesse: "Tecnologia" },
    { id: 4, nome: "Julia Mendes", imagem: "https://picsum.photos/400/300?4", descricao: "Data Scientist", hard: "Python", soft: "Comunicação", area: "Data Science", localizacao: "Porto Alegre", interesse: "Pesquisa" }
  ];

  // 🔥 FILTRO MULTINÍVEL
  const filtrados = profissionais.filter(p => {
    const bySearch =
      p.nome.toLowerCase().includes(search.toLowerCase()) ||
      p.descricao.toLowerCase().includes(search.toLowerCase());

    const byHard = filtros.hard ? p.hard === filtros.hard : true;
    const bySoft = filtros.soft ? p.soft === filtros.soft : true;
    const byArea = filtros.area ? p.area === filtros.area : true;
    const byLocal = filtros.localizacao ? p.localizacao === filtros.localizacao : true;
    const byInterest = filtros.interesse ? p.interesse === filtros.interesse : true;

    return bySearch && byHard && bySoft && byArea && byLocal && byInterest;
  });

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="home-page">

      <h2 className="section-title">Profissionais:</h2>

      <FilterBar onApply={setFiltros} />

      <div className="carousel-wrapper">
        <div className="cards-carousel" ref={carouselRef}>
          {filtrados.map(p => (
            <ProfessionalCard key={p.id} {...p} />
          ))}
        </div>

        <button className="carousel-arrow" onClick={scrollRight}>➤</button>
      </div>

    </div>
  );
}
