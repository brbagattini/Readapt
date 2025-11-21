// Import do JSON local
import data from "../services/api.json";

import foto1 from "../components/images/1.jpeg";
import foto2 from "../components/images/2.avif";
import foto3 from "../components/images/3.jpeg";
import foto4 from "../components/images/4.png";
import foto5 from "../components/images/5.jpeg";
import foto6 from "../components/images/6.webp";
import foto7 from "../components/images/7.jpeg";
import foto8 from "../components/images/8.jpeg";
import foto9 from "../components/images/9.jpg";
import foto10 from "../components/images/10.avif";
import foto11 from "../components/images/11.jpg";
import foto12 from "../components/images/12.jpg";
import foto13 from "../components/images/13.jpeg";
import foto14 from "../components/images/14.jpeg";
import foto15 from "../components/images/15.webp";
import foto16 from "../components/images/16.jpg";
import foto17 from "../components/images/17.jpeg";
import foto18 from "../components/images/18.png";
import foto19 from "../components/images/19.webp";
import foto20 from "../components/images/20.jpeg";
import foto21 from "../components/images/21.jpg";
import foto22 from "../components/images/22.jpg";
import foto23 from "../components/images/23.jpg";
import foto24 from "../components/images/24.jpg";
import foto25 from "../components/images/25.jpg";
import foto26 from "../components/images/26.webp";
import foto27 from "../components/images/27.jpg";
import foto28 from "../components/images/28.jpeg";
import foto29 from "../components/images/29.jpeg";
import foto30 from "../components/images/30.avif";
import foto31 from "../components/images/31.webp";
import foto32 from "../components/images/32.jpg";
import foto33 from "../components/images/33.jpg";
import foto34 from "../components/images/34.jpg";
import foto35 from "../components/images/35.jpg";
import foto36 from "../components/images/36.jpg";
import foto37 from "../components/images/37.png";
import foto38 from "../components/images/38.jpg";
import foto39 from "../components/images/39.png";
import foto40 from "../components/images/40.jpg";
import foto41 from "../components/images/41.jpeg";
import foto42 from "../components/images/42.jpg";
import foto43 from "../components/images/43.jpg";
import foto44 from "../components/images/44.jpg";
import foto45 from "../components/images/45.jpg";
import foto46 from "../components/images/46.jpg";
import foto47 from "../components/images/47.jpg";
import foto48 from "../components/images/48.jpg";
import foto49 from "../components/images/49.jpg";
import foto50 from "../components/images/50.webp";
import foto51 from "../components/images/51.jpg";
import foto52 from "../components/images/52.jpg";
import foto53 from "../components/images/53.avif";
import foto54 from "../components/images/54.jpg";
import foto55 from "../components/images/55.avif";
import foto56 from "../components/images/56.jpg";
import foto57 from "../components/images/57.jpeg";
import foto58 from "../components/images/58.jpg";
import foto59 from "../components/images/59.jpeg";
import foto60 from "../components/images/60.jpg";

// OBJETO IMAGENS
export const imagens = {
  1: foto1, 2: foto2, 3: foto3, 4: foto4, 5: foto5,
  6: foto6, 7: foto7, 8: foto8, 9: foto9, 10: foto10,
  11: foto11, 12: foto12, 13: foto13, 14: foto14, 15: foto15,
  16: foto16, 17: foto17, 18: foto18, 19: foto19, 20: foto20,
  21: foto21, 22: foto22, 23: foto23, 24: foto24, 25: foto25,
  26: foto26, 27: foto27, 28: foto28, 29: foto29, 30: foto30,
  31: foto31, 32: foto32, 33: foto33, 34: foto34, 35: foto35,
  36: foto36, 37: foto37, 38: foto38, 39: foto39, 40: foto40,
  41: foto41, 42: foto42, 43: foto43, 44: foto44, 45: foto45,
  46: foto46, 47: foto47, 48: foto48, 49: foto49, 50: foto50,
  51: foto51, 52: foto52, 53: foto53, 54: foto54, 55: foto55,
  56: foto56, 57: foto57, 58: foto58, 59: foto59, 60: foto60
};

// 🔥 INSERE AUTOMATICAMENTE A IMAGEM CORRETA NO PROFISSIONAL
const dataProcessado = data.map((p) => ({
  ...p,
  foto: imagens[p.id] || p.foto || ""
}));

// -------- API LOCAL --------
export const ProfissionaisAPI = {
  // Buscar todos
  getAll: async () => dataProcessado,

  // Buscar por ID
  getById: async (id) =>
    dataProcessado.find((item) => item.id === Number(id)),

  // Criar (em memória)
  create: async (novo) => {
    const novoId =
      dataProcessado.length > 0
        ? dataProcessado[dataProcessado.length - 1].id + 1
        : 1;

    const item = {
      id: novoId,
      ...novo,
      foto: imagens[novoId] || ""
    };

    dataProcessado.push(item);
    return item;
  },

  // Atualizar
  update: async (id, valores) => {
    const index = dataProcessado.findIndex((p) => p.id === Number(id));
    if (index === -1) return null;

    dataProcessado[index] = { ...dataProcessado[index], ...valores };
    return dataProcessado[index];
  },

  // Deletar
  delete: async (id) => {
    const index = dataProcessado.findIndex((p) => p.id === Number(id));
    if (index === -1) return false;

    const removido = dataProcessado.splice(index, 1);
    return removido[0];
  },
};
