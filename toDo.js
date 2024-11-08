let tasks = [];

function container() {
  const container = document.getElementById("area");
  container.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    container.innerHTML +=
      '<div id="area">' + tasks[i].name + " " + tasks[i].status + "</div>";
  }
}

function addTask() {
  const name = prompt("write a new task");

  document.getElementById("area").textContent = name;
  tasks.push({ name: name, status: "todo" });
  container();
}
