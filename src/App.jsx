import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import MenuHamburguer from "./components/MenuHamburguer";
import SearchBar from "./components/SearchBar";
import "./App.css";

export default function App() {

  const [search, setSearch] = useState("");

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

        {/* SEARCHBAR AGORA É DO HEADER E FUNCIONA */}
        <SearchBar value={search} onChange={setSearch} />

        <div className="avatar-area">
          <img src="https://i.pravatar.cc/40" alt="avatar" className="avatar" />
        </div>
      </header>

      {/* PASSANDO search PARA TODAS AS ROTAS */}
      <Outlet context={{ search }} />
    </>
  );
}
