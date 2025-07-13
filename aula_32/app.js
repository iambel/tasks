const formAdd = document.getElementById("form-add");
const inputItem = document.getElementById("input-item");
const listItens = document.getElementById("list-itens");
const btnReset = document.getElementById("btn-reset");

let itens = [];

window.addEventListener("DOMContentLoaded", () => {
  const data = localStorage.getItem("listaCompras");

  if (data) {
    itens = JSON.parse(data);
    renderList();
  }
});

function salveData() {
  localStorage.setItem("listaCompras", JSON.stringify(itens));
}

function renderList() {
  listItens.innerHTML = "";
  itens.forEach((item, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = item;

    const btnRemove = document.createElement("button");
    btnRemove.textContent = "X";
    btnRemove.title = "Remover Item";

    btnRemove.addEventListener("click", () => {
      removeItem(index);
    });

    li.append(span, btnRemove);
    listItens.appendChild(li);
  });
}

formAdd.addEventListener("submit", (event) => {
  event.preventDefault();
  const newItem = inputItem.value.trim();

  if (!newItem) return;

  itens.push(newItem);
  salveData();
  renderList();
  inputItem.value = "";
});

function removeItem(index) {
  itens.splice(index, 1);
  salveData();
  renderList();
}

btnReset.addEventListener("click", () => {
  if (confirm("deseja limpar a lista?")) {
    itens = [];
    salveData();
    renderList();
  }
});

// FAZER - PENDENTE

// Marcar como comprado - Salvar esse Estado no localStorage
// Contador de Itens - Mostrar quantos itens tem na lista, atualizando em tempo real
// Adicione filtros para itens 'comprados' e 'pedentes'
// Permita ordenar alfabeticamente ou por status
