export default function Login() {
  return (
    <div>

      <h1>Login</h1>

      <form className="login-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
