// PROFILE MANAGEMENT
const profileList = document.getElementById("profileList");
function addProfile() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  if (!name || !role || !phone || !email) return alert("Please fill all fields");

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${role}</td>
    <td>${phone}</td>
    <td>${email}</td>
    <td><button onclick="this.parentElement.parentElement.remove()">Remove</button></td>
  `;
  profileList.appendChild(row);

  document.getElementById("name").value = "";
  document.getElementById("role").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
}

// TASK MANAGEMENT
const taskList = document.getElementById("taskList");
function addTask() {
  const taskName = document.getElementById("taskName").value;
  const assignedTo = document.getElementById("assignedTo").value;
  const deadline = document.getElementById("deadline").value;
  const difficulty = document.getElementById("difficulty").value;

  if (!taskName || !assignedTo || !deadline || !difficulty) return alert("Please fill all fields");

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${taskName}</td>
    <td>${assignedTo}</td>
    <td>${deadline}</td>
    <td>${difficulty}</td>
    <td>
      <select onchange="updateStatus(this)">
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </td>
    <td><button onclick="this.parentElement.parentElement.remove()">Remove</button></td>
  `;
  taskList.appendChild(row);

  document.getElementById("taskName").value = "";
  document.getElementById("assignedTo").value = "";
  document.getElementById("deadline").value = "";
  document.getElementById("difficulty").value = "Easy";
}

function updateStatus(selectElem) {
  selectElem.style.fontWeight = "bold";
  selectElem.style.color =
    selectElem.value === "Completed"
      ? "green"
      : selectElem.value === "In Progress"
      ? "orange"
      : "red";
}
