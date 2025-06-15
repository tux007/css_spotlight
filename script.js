document.body.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--clientX", e.clientX + "px");
  document.body.style.setProperty("--clientY", e.clientY + "px");
});
