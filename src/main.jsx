import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./Routes/Home.jsx";
import Login from "./routes/Login.jsx";
import SobreNos from "./routes/SobreNos.jsx";
import ProfessionalCard from "./components/ProfessionalCard.jsx";


// CONFIGURAÇÃO DE ROTAS
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/sobrenos", element: <SobreNos /> },
      {path: "/perfil/:id", element: <ProfessionalCard />,},

    ],
  },
]);

// RENDERIZAÇÃO
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
