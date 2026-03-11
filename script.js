const animes = [
  {
    nome: "Attack on Titan",
    genero: "Ação / Drama",
    descricao: "Conflitos épicos e reviravoltas intensas em um mundo pós-apocalíptico.",
    nota: "Top 4K"
  },
  {
    nome: "Demon Slayer",
    genero: "Ação / Sobrenatural",
    descricao: "Animação de ponta com batalhas espetaculares e direção cinematográfica.",
    nota: "Visual Insano"
  },
  {
    nome: "Jujutsu Kaisen",
    genero: "Ação / Escolar",
    descricao: "Energia absurda, trilha forte e coreografias de luta incríveis.",
    nota: "Hype"
  },
  {
    nome: "Your Name",
    genero: "Romance / Fantasia",
    descricao: "Filme emocionante com fotografia impecável e narrativa sensível.",
    nota: "Filme 4K"
  },
  {
    nome: "Violet Evergarden",
    genero: "Drama",
    descricao: "Um espetáculo visual com direção artística refinada.",
    nota: "Obra-prima"
  },
  {
    nome: "Cyberpunk: Edgerunners",
    genero: "Sci-Fi / Ação",
    descricao: "Visual neon vibrante e ritmo eletrizante no universo cyberpunk.",
    nota: "Neon 4K"
  }
];

const galleryImages = [
  {
    titulo: "Attack on Titan • Colossal Titan",
    url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=3840&q=80"
  },
  {
    titulo: "Demon Slayer • Katana e Neons",
    url: "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=3840&q=80"
  },
  {
    titulo: "Jujutsu Kaisen • Aura Sombria",
    url: "https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&w=3840&q=80"
  },
  {
    titulo: "Your Name • Céu Estelar",
    url: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=3840&q=80"
  }
];

const videos = [
  {
    titulo: "Attack on Titan Final Season Trailer (4K)",
    embed: "https://www.youtube.com/embed/MGRm4IzK1SQ"
  },
  {
    titulo: "Demon Slayer Trailer (4K)",
    embed: "https://www.youtube.com/embed/VQGCKyvzIM4"
  },
  {
    titulo: "Jujutsu Kaisen Trailer (4K)",
    embed: "https://www.youtube.com/embed/4A_X-Dvl0ws"
  }
];

const grid = document.getElementById("animeGrid");
const galleryGrid = document.getElementById("galleryGrid");
const videoGrid = document.getElementById("videoGrid");
const searchAnime = document.getElementById("searchAnime");
const toggleTheme = document.getElementById("toggleTheme");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightbox = document.getElementById("closeLightbox");

function renderAnimes(list) {
  grid.innerHTML = "";

  list.forEach((anime) => {
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
}

function renderGallery() {
  galleryImages.forEach((item) => {
    const figure = document.createElement("figure");
    figure.className = "gallery-item";
    figure.innerHTML = `
      <img src="${item.url}" alt="${item.titulo}" loading="lazy" />
      <figcaption class="caption">${item.titulo}</figcaption>
    `;

    figure.addEventListener("click", () => {
      lightboxImage.src = item.url;
      lightboxImage.alt = item.titulo;
      lightboxCaption.textContent = item.titulo;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    });

    galleryGrid.appendChild(figure);
  });
}

function renderVideos() {
  videos.forEach((video) => {
    const card = document.createElement("article");
    card.className = "video-card";
    card.innerHTML = `
      <iframe
        src="${video.embed}"
        title="${video.titulo}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>${video.titulo}</p>
    `;
    videoGrid.appendChild(card);
  });
}

searchAnime.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase().trim();
  const filtered = animes.filter(
    (anime) =>
      anime.nome.toLowerCase().includes(query) ||
      anime.genero.toLowerCase().includes(query) ||
      anime.descricao.toLowerCase().includes(query)
  );

  renderAnimes(filtered);
});

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleTheme.textContent = document.body.classList.contains("light")
    ? "☀️ Tema"
    : "🌙 Tema";
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  }
});

renderAnimes(animes);
renderGallery();
renderVideos();
