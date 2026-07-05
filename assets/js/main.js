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
    iframe.src = `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
  }

  if (iframe && strip) {

    videos.forEach((id, index) => {

      const thumb = document.createElement("div");
      thumb.className = "video-thumb";

      thumb.innerHTML = `
        <img
          src="https://img.youtube.com/vi/${id}/hqdefault.jpg"
          alt="">
      `;

      thumb.addEventListener("click", () => {

        setVideo(id);

        document
          .querySelectorAll(".video-thumb")
          .forEach(t => t.classList.remove("active"));

        thumb.classList.add("active");

      });

      strip.appendChild(thumb);

      if (index === 0) {

        setVideo(id);
        thumb.classList.add("active");

      }

    });

  }

 /* ==========================================================
   MODAL SYSTEM (FIXED SCROLL BEHAVIOR)
   ========================================================== */

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

function openModal(html) {
  if (!modal || !modalContent) return;

  modalContent.innerHTML = html;
  modal.classList.remove("hidden");

  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal || !modalContent) return;

  modal.classList.add("hidden");
  modalContent.innerHTML = "";

  document.body.style.overflow = "";
}

/* close on background click */
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

/* ESC key */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
  
/* ==========================================================
   MODAL CARDS
   ========================================================== */

document.querySelectorAll(".modal-card").forEach(card => {

  card.style.cursor = "pointer";

  card.addEventListener("click", () => {

    openModal(`

      <h2>${card.dataset.title}</h2>

      ${
        card.dataset.image
          ? `<img
              src="${card.dataset.image}"
              style="
                width:100%;
                border-radius:12px;
                margin:18px 0;
              ">`
          : ""
      }

      <p>${card.dataset.description}</p>

    `);

  });

});

});                         
