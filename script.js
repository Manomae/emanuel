const animes = [
  {
    nome: "Fullmetal Alchemist: Brotherhood",
    genero: "Aventura / Fantasia",
    descricao:
      "Dois irmãos alquimistas enfrentam conspirações em busca da redenção.",
    nota: "Clássico"
  },
  {
    nome: "Attack on Titan",
    genero: "Ação / Drama",
    descricao:
      "A humanidade luta pela sobrevivência contra titãs em uma história intensa.",
    nota: "Imperdível"
  },
  {
    nome: "Demon Slayer",
    genero: "Ação / Sobrenatural",
    descricao:
      "Tanjiro embarca em uma jornada emocionante para salvar sua irmã.",
    nota: "Visual incrível"
  },
  {
    nome: "Your Name",
    genero: "Romance / Fantasia",
    descricao:
      "Um romance sensível entre dois jovens conectados por um fenômeno misterioso.",
    nota: "Filme"
  },
  {
    nome: "Jujutsu Kaisen",
    genero: "Ação / Escolar",
    descricao:
      "Maldições, lutas cinematográficas e personagens carismáticos.",
    nota: "Atual"
  },
  {
    nome: "Death Note",
    genero: "Suspense / Psicológico",
    descricao:
      "Um caderno mortal inicia um jogo intelectual entre genialidade e justiça.",
    nota: "Mind game"
  }
];

const grid = document.getElementById("animeGrid");
const toggleTheme = document.getElementById("toggleTheme");

animes.forEach((anime) => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <h4>${anime.nome}</h4>
    <p><strong>Gênero:</strong> ${anime.genero}</p>
    <p>${anime.descricao}</p>
    <span class="badge">${anime.nota}</span>
  `;

  grid.appendChild(card);
});

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleTheme.textContent = document.body.classList.contains("light")
    ? "☀️ Tema"
    : "🌙 Tema";
});
