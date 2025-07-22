const menu = document.getElementById("menu");
const dropdown = document.getElementById("dropdown");

menu.addEventListener("click", () => {
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});
