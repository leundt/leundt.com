const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggleBtn.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");

  themeIcon.classList.toggle("fa-sun", isLight);
  themeIcon.classList.toggle("fa-moon", !isLight);
});