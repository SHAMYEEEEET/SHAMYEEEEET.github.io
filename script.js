function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  const themeButton = document.getElementById("themeButton");
  themeButton.textContent = isDark ? "🔆" : "🌙";
}

window.onload = function () {
  const storedTheme = localStorage.getItem("theme");
  const themeButton = document.getElementById("themeButton");

  if (storedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "🔆";
  } else {
    themeButton.textContent = "🌙";
  }
};
