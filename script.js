document.addEventListener("DOMContentLoaded", () => {
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    document.body.classList.add("dark-mode");
    document.getElementById("themeButton").textContent = "🔆";
  } else {
    document.body.classList.remove("dark-mode");
    document.getElementById("themeButton").textContent = "🌙";
  }
});

function toggleDarkMode() {
  const body = document.body;
  const themeButton = document.getElementById("themeButton");

  body.classList.toggle("dark-mode");

  const isDark = body.classList.contains("dark-mode");
  themeButton.textContent = isDark ? "🔆" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}
