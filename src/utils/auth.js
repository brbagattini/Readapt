// ⚠️ Demo local. Não use isso em produção.
// Salva tudo no localStorage do navegador, rodando em localhost.

const AUTH_KEY = "auth";
const PERFIL_KEY = "perfil";

export function getPerfil() {
  try {
    return JSON.parse(localStorage.getItem(PERFIL_KEY) || "{}");
  } catch {
    return {};
  }
}

export function setPerfil(p) {
  const atual = getPerfil();
  const merged = { theme: "dark", notifyNews: true, notifyMatches: false, ...atual, ...p };
  localStorage.setItem(PERFIL_KEY, JSON.stringify(merged));
  return merged;
}

function getAuth() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_KEY) || "{}");
  } catch {
    return {};
  }
}

function setAuth(a) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(a));
  return a;
}

export function isAuthenticated() {
  const a = getAuth();
  return !!a.loggedIn && !!a.email && !!a.passHash;
}

export async function sha256(str) {
  const enc = new TextEncoder();
  const buf = await crypto.subtle.digest("SHA-256", enc.encode(str || ""));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function register({ name, email, password, avatar = "" }) {
  const passHash = await sha256(password);
  setAuth({ email, passHash, loggedIn: true, createdAt: Date.now() });

  // Preenche o perfil usado no Perfil.jsx
  setPerfil({
    name,
    email,
    avatar, // Data URL (imagem local)
  });

  return true;
}

export async function login(email, password) {
  const a = getAuth();
  if (!a?.email || !a?.passHash) return false;
  if (a.email !== email) return false;
  const passHash = await sha256(password);
  if (passHash !== a.passHash) return false;
  setAuth({ ...a, loggedIn: true, lastLoginAt: Date.now() });
  return true;
}

export function logout() {
  const a = getAuth();
  if (!a?.email) {
    localStorage.removeItem(AUTH_KEY);
    return;
  }
  setAuth({ ...a, loggedIn: false });
}
