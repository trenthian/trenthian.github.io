document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================================
     VIDEO SYSTEM
     ========================================================== */

  const videos = [
    {
      id: "ypbA6h2ZgyQ",
      notes: "Scoring Arrangement of Music from The Legend of Zelda Series and added sfx track built from game audio across the franchise."
    },
    {
      id: "50X2SWe-oT4",
      notes: "OCRemix Street Fighter 2 Remix featuring arrangements of all Shoto Fighters centered around Ryu's stage bgm.\nFeaturing Jon 'The Duke' St. John as 'The Demon'."
    },
    {
      id: "yByVoyZ8utE",
      notes: "Improvised piano arrangement of the main theme of Final Fantasy VII."
    },
    {
      id: "GxqwHcMsl90",
      notes: "Scoring a Character Monologue. Arrangement of Gnarls Barkley 'Crazy'. Actor: James McNicholas."
    },
    {
      id: "v2Ajf3hrWUo",
      notes: "Collected gameplay compilation edited into an entertainment video. Video editing and production."
    },
    {
      id: "dN8fMuBJbd8",
      notes: "Collected gameplay compilation edited into an entertainment video.\nArrangement of music from ArcheAge by Trenthian / The Stellar Stoat."
    },
    {
      id: "Coxuro26mBI",
      notes: "Film scoring competition with HBO's Westworld."
    },
    {
      id: "VZBxBqHebnk",
      notes: "OCRemix arrangement of Forgotten Days from Suikoden."
    },
    {
      id: "ieHUqXKRMTE",
      notes: "High quality arrangement of music from Jurassic Park created for a special internet video that originally lacked the soundtrack."
    },
    {
      id: "48u1pQCifcw",
      notes: "Original music by The Stellar Stoat / Trenthian."
    }
  ];

  const iframe = document.getElementById("mainVideo");
  const strip = document.getElementById("videoStrip");
  const notesPanel = document.getElementById("videoNotes");

  function setVideo(video) {

    if (!iframe) return;

    iframe.src =
      `https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`;

    if (notesPanel) {
      notesPanel.textContent = video.notes || "";
    }

    document.querySelectorAll(".video-thumb").forEach(t =>
      t.classList.remove("active")
    );

    const active = document.querySelector(`[data-video="${video.id}"]`);

    if (active) {
      active.classList.add("active");
    }

  }

  if (iframe && strip) {

    videos.forEach((video, index) => {

      const thumb = document.createElement("div");

      thumb.className = "video-thumb";

      thumb.dataset.video = video.id;

      thumb.innerHTML = `
        <img
          src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg"
          alt="Video Thumbnail">
      `;

      thumb.addEventListener("click", () => {
        setVideo(video);
      });

      strip.appendChild(thumb);

      if (index === 0) {
        setVideo(video);
      }

    });

  }

  /* ==========================================================
     MODAL
     ========================================================== */

  const modal = document.getElementById("modal");
  const modalInner = document.getElementById("modalInner");

  function openModal(html) {

    if (!modal || !modalInner) return;

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

  if (modal) {

    modal.addEventListener("click", (event) => {

      if (event.target === modal) {
        closeModal();
      }

    });

  }

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
      closeModal();
    }

  });

  /* ==========================================================
     CARD MODALS
     ========================================================== */

  document.querySelectorAll(".modal-card").forEach(card => {

    card.addEventListener("click", () => {

      const html = `
        <h2>${card.dataset.title || ""}</h2>

        ${
          card.dataset.image
            ? `<img src="${card.dataset.image}" alt="">`
            : ""
        }

        <p>${card.dataset.description || ""}</p>
      `;

      openModal(html);

    });

  });

});
