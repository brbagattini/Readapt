import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./Routes/Home.jsx";
import Login from "./routes/Login.jsx";
import SobreNos from "./routes/SobreNos.jsx";
import MeuPerfil from "./routes/MeuPerfil.jsx";
import PerfilProfissional from "./routes/PerfilProfissional.jsx";
import Cadastro from "./routes/Cadastro.jsx";
// CONFIGURAÇÃO DE ROTAS
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/sobrenos", element: <SobreNos /> },
      { path: "/perfil/:id", element: <PerfilProfissional />,},
      { path: "/cadastro", element: <Cadastro /> },
      { path: "/meu-perfil", element: <MeuPerfil />},

    ],
  },
]);

// RENDERIZAÇÃO
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
