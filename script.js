window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;

  // スクロール割合（0〜1）
  let opacity = scrollY / viewportHeight;
  if (opacity > 1) opacity = 1;

  document.querySelector(".fade-image").style.opacity = opacity;
});
