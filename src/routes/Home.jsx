import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ProfessionalCard from "../components/ProfessionalCard";
import FilterBar from "../components/FilterBar";
import { ProfissionaisAPI } from "../services/api";

export default function Home() {
  const { search } = useOutletContext();

  const [filtros, setFiltros] = useState({});
  const [profissionais, setProfissionais] = useState([]);
  const [loading, setLoading] = useState(true);

  const carouselRef = useRef(null);

  useEffect(() => {
    async function carregar() {
      try {
        const resultado = await ProfissionaisAPI.getAll();
        setProfissionais(resultado);
      } catch (err) {
        console.error("Erro ao carregar profissionais:", err);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, []);

  const filtrados = profissionais.filter((p) => {
    const texto = search.toLowerCase();

    const bySearch =
      p.nome?.toLowerCase().includes(texto) ||
      p.cargo?.toLowerCase().includes(texto) ||
      p.resumo?.toLowerCase().includes(texto);

    const byHard = filtros.hard ? p.habilidadesTecnicas?.includes(filtros.hard) : true;
    const bySoft = filtros.soft ? p.softSkills?.includes(filtros.soft) : true;
    const byArea = filtros.area ? p.area === filtros.area : true;
    const byLocal = filtros.localizacao ? p.localizacao === filtros.localizacao : true;
    const byInterest = filtros.interesse ? p.areaInteresses?.includes(filtros.interesse) : true;

    return bySearch && byHard && bySoft && byArea && byLocal && byInterest;
  });

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  if (loading) {
    return <p style={{ padding: 20 }}>Carregando profissionais...</p>;
  }

  return (
    <div className="home-page">
      <h2 className="section-title">Profissionais:</h2>

      <FilterBar onApply={setFiltros} />

      <div className="carousel-wrapper">
        <div className="cards-carousel" ref={carouselRef}>
          {filtrados.length > 0 ? (
            filtrados.map((p) => (
              <ProfessionalCard
                key={p.id}
                id={p.id}
                nome={p.nome}
                imagem={p.foto} // já vem com a imagem automática
                descricao={p.cargo}
                hard={p.habilidadesTecnicas?.[0]}
                soft={p.softSkills?.[0]}
                area={p.area}
                localizacao={p.localizacao}
                interesse={p.areaInteresses?.[0]}
              />
            ))
          ) : (
            <p className="no-results">Nenhum profissional encontrado.</p>
          )}
        </div>

        <button className="carousel-arrow" onClick={scrollRight}>
          ➤
        </button>
      </div>
    </div>
  );
}
