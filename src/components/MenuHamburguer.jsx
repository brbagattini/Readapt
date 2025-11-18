import { useState } from "react";

export default function MenuHamburguer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="hamburger" onClick={() => setOpen(!open)}>
        <span className={open ? "line open" : "line"}></span>
        <span className={open ? "line open" : "line"}></span>
        <span className={open ? "line open" : "line"}></span>
      </button>

      <aside className={`side-menu ${open ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/sobreNos">Sobre Nós</a>
        <a href="/login">Login</a>
      </aside>
    </>
  );
}
