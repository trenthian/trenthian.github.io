
/* ==========================================================
   INITIALIZATION GUARD
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

  initTheme();
  initGlow();
  initSound();
  initVideoSystem();

});


/* ==========================================================
   THEME TOGGLE (PERSISTED)
   ========================================================== */

function initTheme() {

  const btn = document.getElementById("themeToggle");

  const KEY = "site-theme";

  // restore theme
  const saved = localStorage.getItem(KEY);

  if (saved === "slate") {

    document.body.classList.add("slate");

  }

  btn?.addEventListener("click", () => {

    document.body.classList.toggle("slate");

    const mode = document.body.classList.contains("slate")
      ? "slate"
      : "default";

    localStorage.setItem(KEY, mode);

  });

}


/* ==========================================================
   CARD HOVER GLOW (OPTIMIZED)
   ========================================================== */

function initGlow() {

  const cards = document.querySelectorAll(".card");

  if (!cards.length) return;

  cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);

    });

  });

}


/* ==========================================================
   SOUND SYSTEM (SAFE PLAY)
   ========================================================== */

function initSound() {

  const sound = document.getElementById("uiSound");

  if (!sound) return;

  let last = 0;

  document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", async () => {

      const now = Date.now();

      if (now - last < 120) return;

      last = now;

      try {

        sound.currentTime = 0;
        sound.volume = 0.25;

        await sound.play();

      } catch (e) {
        // autoplay restrictions ignored silently
      }

    });

  });

}


/* ==========================================================
   VIDEO SYSTEM (STATIC PLAYLIST - GITHUB PAGES SAFE)
   ========================================================== */

function initVideoSystem() {

  const iframe = document.getElementById("mainVideo");
  const playlistEl = document.getElementById("videoPlaylist");

  if (!iframe || !playlistEl) return;

  /* ----------------------------------------------------------
     STATIC PLAYLIST
     Replace these entries manually when needed
  ---------------------------------------------------------- */

  const playlist = [

    {
      id: "ypbA6h2ZgyQ",
      title: "Featured Video"
    },

    {
      id: "dQw4w9WgXcQ",
      title: "Example Video 2"
    }

  ];


  /* ----------------------------------------------------------
     RENDER PLAYLIST
  ---------------------------------------------------------- */

  function render() {

    playlistEl.innerHTML = "";

    playlist.forEach((video, index) => {

      const item = document.createElement("div");

      item.className = "video-item";

      item.innerHTML = `
        <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" loading="lazy" alt="">
      `;

      item.addEventListener("click", () => {

        iframe.src = `https://www.youtube.com/embed/${video.id}`;

        document.querySelectorAll(".video-item")
          .forEach(el => el.classList.remove("active"));

        item.classList.add("active");

      });

      playlistEl.appendChild(item);

      // auto-load first
      if (index === 0) {

        iframe.src = `https://www.youtube.com/embed/${video.id}`;
        item.classList.add("active");

      }

    });

  }

  render();

}
