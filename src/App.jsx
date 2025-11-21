import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuHamburguer from "./components/MenuHamburguer";
import SearchBar from "./components/SearchBar";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [avatar, setAvatar] = useState("https://i.pravatar.cc/40");

  useEffect(() => {
    const stored = localStorage.getItem("perfilCompleto");
    if (stored) {
      const perfil = JSON.parse(stored);
      if (perfil.foto) {
        setAvatar(perfil.foto); // <-- atualiza avatar automaticamente
      }
    }
  }, []);

  return (
    <>
      <header className="header">
        <div className="left">
          <MenuHamburguer />

          <Link to="/" className="logo-area">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              className="logo-img"
              alt="logo"
            />
            <h2 className="site-name">MeuSite</h2>
          </Link>
        </div>

        <SearchBar value={search} onChange={setSearch} />

        {/* AVATAR DINÂMICO */}
        <div className="avatar-area">
          <Link to="/meu-perfil">
            <img
              src={avatar}
              alt="avatar"
              className="avatar"
            />
          </Link>
        </div>
      </header>

      <Outlet context={{ search }} />
    </>
  );
}
