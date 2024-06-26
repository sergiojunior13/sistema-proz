import { API } from "./services/api.js";
import { StorageToken } from "./services/storage.js";

const token = StorageToken.get();
if (token) renderUsersData();

async function renderUsersData() {
  const tbodyElement = document.querySelector("tbody");

  const data = await API.getUsersData();

  console.log(data);

  for (const c in data) {
    const nome = data[c]["nome"];
    const setor = data[c]["setor"];
    const genero = data[c]["genero"];
    const email = data[c]["email"];

    tbodyElement.innerHTML += `<tr> <td data-th="Nome">${nome}</td> <td data-th="E-mail" id=email_${c}> ${email}</td> <td data-th="Gênero">${genero}</td> <td data-th="Setor">${setor}</td> <td><div id="row-buttons-group"><button class="edit" id=edit_${c}>Editar <i class="fa-solid fa-edit"></i></button><button class="delete" id=del_${c}>Deletar <i class="fa-solid fa-trash"></i></button></div></td></tr>`;
  }
}

document.querySelector("tbody").addEventListener("click", function (event) {
  const target = event.target;
  const idBtn = target.id;
  if (idBtn.substring(0, 4) == "del_") {
    API.delUser(document.querySelector(`#email_${idBtn.split("_")[1]}`).innerText);
  }
});
