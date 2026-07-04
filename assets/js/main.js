const videos = [
  "ypbA6h2ZgyQ",
  "dQw4w9WgXcQ",
  "M7lc1UVf-VE"
];

const iframe = document.getElementById("mainVideo");
const strip = document.getElementById("videoStrip");

function setVideo(id) {
  iframe.src = `https://www.youtube.com/embed/${id}`;
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
