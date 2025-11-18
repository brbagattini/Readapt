# Projeto Herizon — Portal de Notícias Esportivas (Futebol)

> Vite + React • Rotas com React Router • CSS com design tokens • Sliders e modais • Pronto para GitHub Pages

**Demo**: https://brbagattini.github.io/Projeto-Herizon/

---

## ✨ Visão geral

O **Herizon** é um site de notícias esportivas focado em futebol, com:
- **Home** com “Último Jogo” (placar com escudos), **Próximas Partidas**, **Destaque**, **Tabela da Liga** (header fixo + scroll) e **placa de propaganda** em **slideshow**.
- **Atletas e Clubes**: grade de clubes com **scroll**, modais de detalhes do clube, lista de jogadoras com **modal** individual e uma **thumbnail** de jogadora em destaque.
- **Sobre nós**: **slideshow** histórico automático.
- **Busca global** no **nav** (clubes e jogadoras) com dropdown + abertura de modal.
- **Autenticação local** (mock): login/cadastro, avatar com preview e tema salvo por perfil (no navegador).
- **Pronto para integrar API** (API-Football/RapidAPI) via proxy do Vite.

---

## 🧰 Stack

- **React 19** + **Vite 7**
- **React Router v7** (recomendado `HashRouter` em GitHub Pages)
- **CSS** com design tokens (variáveis CSS em `:root`)
- (Opcional) **Tailwind v4** via `@import "tailwindcss";` — o projeto funciona só com CSS também.
- Deploy com **GitHub Pages** (`gh-pages`)

---

## 📦 Requisitos

- Node 18+ (recomendado 20+)
- npm / yarn / pnpm

---

## 🚀 Como rodar

```bash
git clone https://github.com/brbagattini/Projeto-Herizon.git
cd Projeto-Herizon
npm install
npm i react-router-dom
npm run dev

---

## Participantes

- Vitor Reis Bugallo Teixeira - RM 562208
- Bruno Bagattini Fernandes - RM 562863
- Nathália dos Santos Cordeiro - RM 563072
- Luigi Ferrarini Borghi - RM 563096
- Arthur Ferreira Alves dos Santos - RM 564958
