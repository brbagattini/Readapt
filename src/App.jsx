import { Outlet, Link } from "react-router-dom";
import MenuHamburguer from "./components/MenuHamburguer";
import SearchBar from "./Components/SearchBar";
import "./App.css";

export default function App() {
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

        <SearchBar />

        <div className="avatar-area">
          <img
            src=""
            alt="avatar"
            className="avatar"
          />
        </div>
      </header>
      <Outlet />
    </>
  );
}
