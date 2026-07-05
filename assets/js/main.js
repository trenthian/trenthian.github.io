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
     MODAL SYSTEM
     ========================================================== */

  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");
  const modalClose = document.getElementById("modalClose");

  function openModal(html) {

    modalContent.innerHTML = html;

    modal.classList.remove("hidden");

    document.body.style.overflow = "hidden";

  }

  function closeModal() {

    modal.classList.add("hidden");

    modalContent.innerHTML = "";

    document.body.style.overflow = "";

  }

  modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {

    if (event.target === modal) {

      closeModal();

    }

  });

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      closeModal();

    }

  });

  /* ==========================================================
     TEST CARD
     ========================================================== */

  const firstCard = document.querySelector(".card");

  if (firstCard) {

    firstCard.style.cursor = "pointer";

    firstCard.addEventListener("click", () => {

      openModal(`
        <h2>Test Modal</h2>

        <p>
          Congratulations!
          Your modal system is now working.
        </p>

        <img
          src="https://img.youtube.com/vi/ypbA6h2ZgyQ/maxresdefault.jpg">

        <p>
          Eventually every project card will display completely different
          content here without leaving the page.
        </p>
      `);

    });

  }

});
