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

    iframe.src =
      `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
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
     MODAL SYSTEM
     ========================================================== */

  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");

  if (!modal || !modalContent) return;

  let modalOpen = false;

  function openModal(html) {

    modalContent.innerHTML = html;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

    modalOpen = true;

  }

  function closeModal() {

    if (!modalOpen) return;

    modal.classList.remove("show");

    modalOpen = false;

    setTimeout(() => {

      modalContent.innerHTML = "";

      document.body.style.overflow = "";

    }, 240);

  }

  /* Click outside */

  modal.addEventListener("click", (event) => {

    if (event.target === modal) {

      closeModal();

    }

  });

  /* ESC */

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      closeModal();

    }

  });

  /* ==========================================================
     MODAL CARDS
     ========================================================== */

  document.querySelectorAll(".modal-card").forEach(card => {

    card.style.cursor = "pointer";

    card.addEventListener("click", () => {

      const title =
        card.dataset.title || "";

      const description =
        card.dataset.description || "";

      const image =
        card.dataset.image || "";

      const video =
        card.dataset.video || "";

      let html = "";

      html += `<h2>${title}</h2>`;

      if (image) {

        html += `
          <img
            src="${image}"
            alt="">
        `;

      }

      if (video) {

        html += `
          <div class="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/${video}?rel=0&modestbranding=1"
              allowfullscreen>
            </iframe>
          </div>
        `;

      }

      html += `<p>${description}</p>`;

      openModal(html);

    });

  });

});
