import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();
  
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleCadastro(e) {
    e.preventDefault();

    const novoUser = {
      nome,
      email,
      telefone: "",
      descricao: "",
      conexoes: [],
      foto: "https://i.pravatar.cc/300"
    };

    localStorage.setItem("user", JSON.stringify(novoUser));

    navigate("/meu-perfil");
  }

  return (
    <div className="auth-container">
      <h1>Cadastrar</h1>

      <form className="auth-form" onSubmit={handleCadastro}>
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Crie uma senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <button type="submit">Criar conta</button>
      </form>

      <p>
        Já tem conta? <Link to="/login">Entrar</Link>
      </p>
    </div>
  );
}
