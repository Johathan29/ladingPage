document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("mainHeader");

  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });
});