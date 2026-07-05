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
  iframe.src = `https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`;
}

videos.forEach((id, index) => {
  const el = document.createElement("div");
  el.className = "video-thumb";

  el.innerHTML = `
    <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg">
  `;

  el.addEventListener("click", () => setVideo(id));

  strip.appendChild(el);

  if (index === 0) setVideo(id);
});
