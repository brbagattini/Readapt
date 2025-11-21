import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuHamburguer from "./components/MenuHamburguer";
import SearchBar from "./components/SearchBar";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [avatar, setAvatar] = useState("https://i.pravatar.cc/40");

  // 🌙 Tema (dark / light)
  const [darkMode, setDarkMode] = useState(false);

  // Carregar tema + avatar
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }

    const stored = localStorage.getItem("perfilCompleto");
    if (stored) {
      const perfil = JSON.parse(stored);
      if (perfil.foto) {
        setAvatar(perfil.foto);
      }
    }
  }, []);

  // Aplicar tema quando mudar
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

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

        {/* BOTÃO DARK MODE */}
        <button
          className="dark-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* AVATAR */}
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
