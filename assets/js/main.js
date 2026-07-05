document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================================
     VIDEO SYSTEM
     ========================================================== */

  const videos = [
    "ypbA6h2ZgyQ",
    "50X2SWe-oT4",
    "yByVoyZ8utE",
    "GxqwHcMsl90",
    "v2Ajf3hrWUo",
    "dN8fMuBJbd8",
    "Coxuro26mBI",
    "VZBxBqHebnk",
    "ieHUqXKRMTE",
    "48u1pQCifcw"
  ];

  const iframe = document.getElementById("mainVideo");
  const strip = document.getElementById("videoStrip");

  function setVideo(id) {
    if (!iframe) return;
    iframe.src = `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
  }

  if (iframe && strip) {
    videos.forEach((id, index) => {
      const thumb = document.createElement("div");
      thumb.className = "video-thumb";

      thumb.innerHTML = `<img src="https://img.youtube.com/vi/${id}/hqdefault.jpg">`;

      thumb.addEventListener("click", () => {
        setVideo(id);
      });

      strip.appendChild(thumb);

      if (index === 0) setVideo(id);
    });
  }

/* ==========================================================
   MODAL SYSTEM (FIXED + SAFE)
   ========================================================== */

const modal = document.getElementById("modal");
const modalInner = document.getElementById("modalInner");

function openModal(html) {
  if (!modal || !modalInner) {
    console.warn("Modal elements missing in HTML");
    return;
  }

  modalInner.innerHTML = html;

  modal.classList.add("show");
  document.body.classList.add("modal-open");
}

function closeModal() {
  if (!modal || !modalInner) return;

  modal.classList.remove("show");
  document.body.classList.remove("modal-open");

  modalInner.innerHTML = "";
}

/* close background click */
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

/* ESC key */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* CARD → MODAL */
document.querySelectorAll(".modal-card").forEach(card => {
  card.addEventListener("click", () => {
    openModal(`
      <h2>${card.dataset.title || ""}</h2>
      ${card.dataset.image ? `<img src="${card.dataset.image}" />` : ""}
      <p>${card.dataset.description || ""}</p>
    `);
  });
});

});
