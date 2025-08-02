// carraga o DOM pra depois acessar os elementos
document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu");
  const toggleMenu = document.getElementById("toggle-menu");
});

toggleMenu.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open"); // toggle a classe
  navMenu.setAttribute("aria-expanded", isOpen); // atualiza o atributo

  toggleMenu.innerHTML = isOpen ? "&times;" : "&#9776;"; // muda o icone
  toggleMenu.setAttribute("aria-label", isOpen ? "fechar" : "abrir");
});
