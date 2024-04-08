import { API } from "./services/api.js";

renderUsersAmountData();

async function renderUsersAmountData() {
  const usersAmountElement = document.getElementById("users-amount");

  const { quantidadeUsuarios: usersAmount } = await API.getUsersAmountData();

  usersAmountElement.innerText = usersAmount;
}

renderAdminAmountData()

async function renderAdminAmountData() {
  const usersAmountElement = document.getElementById("admins-amount");

  const { administradores: adminsAmount } = await API.getAdminAmountData();

  usersAmountElement.innerText = adminsAmount;
}

renderBlockAmountData()

async function renderBlockAmountData() {
  const blockAmountElement = document.getElementById("block-amount");

  const { total: totalBlock } = await API.getBlockAmountData();

  blockAmountElement.innerText = totalBlock;
}

renderActiveAmountData()

async function renderActiveAmountData() {
  const activeAmountElement = document.getElementById("active-amount");

  const { total: totalActive } = await API.getActiveAmountData();

  activeAmountElement.innerText = totalActive;
}

// Dashboard 1
const ctx = document.getElementById("lineChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Setores"],
    datasets: [
      {
        label: "Financeiro",
        data: [12],
        backgroundColor: ["#f97316"],
        borderColor: ["#f97316"],
        borderWidth: 1,
      },
      
      {
        label: "Administração",
        data: [19],
        backgroundColor: ["#f97316"],
        borderColor: ["#f97316"],
        borderWidth: 1,
      },

      {
        label: "TI",
        data: [3],
        backgroundColor: ["#f97316"],
        borderColor: ["#f97316"],
        borderWidth: 1,
      },

      {
        label: "Conservação",
        data: [5],
        backgroundColor: ["#f97316"],
        borderColor: ["#f97316"],
        borderWidth: 1,
      },

      {
        label: "Manutenção",
        data: [2],
        backgroundColor: ["#f97316"],
        borderColor: ["#f97316"],
        borderWidth: 1,
      },
      
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

// Dashboard 2
const cty = document.getElementById("doughnut");

new Chart(cty, {
  type: "doughnut",
  data: {
    labels: ["Masculino", "Feminino"],
    datasets: [
      {
        label: "Gênero por Usuário",
        data: [57, 43],
        backgroundColor: ["#f97316", "#00"],
        borderColor: ["#f97316"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
