const theme = localStorage.getItem("theme") || "light";
document.body.dataset.theme = theme;

function toggleTheme(){
  const t = document.body.dataset.theme === "light" ? "dark" : "light";
  document.body.dataset.theme = t;
  localStorage.setItem("theme", t);
}
