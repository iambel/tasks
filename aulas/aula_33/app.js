const btn = document.getElementById("btnChange");
const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");
const list = document.getElementById("list");
const btnAdd = document.getElementById("btnAdd");
let i = 1;

function changeTitle() {
  title.textContent = "abacatada é bom";
}

btnAdd.addEventListener("click", () => {
  const item = document.createElement("li");
  item.textContent = `item ${i++}`;

  list.appendChild(item);
});

paragraph.addEventListener("mouseover", () => {
  paragraph.classList.add("focado");
}); // isso faz o parágrafo ficar focado

paragraph.addEventListener("mouseout", () => {
  paragraph.classList.remove("focado");
}); // isso faz o parágrafo perder o focado

function showDialog() {
  alert("e aí?");
  const name = prompt("seu nome?");

  if (confirm(`confirmar nome: ${name}`)) {
    alert(`olá, ${name}`);
  } else {
    alert("confirmação cancelada");
  }
}

function goTo() {
  window.location.href = "https://google.com";
} // isso faz o navegador ir para o google

function Update() {
  window.location.reload();
}

function showInfo() {
  const info = {
    userAgent: navigator.userAgent,
    plataform: navigator.platform,
    language: navigator.language,
    screenWidth: screen.width,
    screenHeight: screen.height,
  };

  document.getElementById("exit").textContent = JSON.stringify(info, null, 2); // isso tá escrevendo o objeto info no parágrafo
}
