let array = [];

function print() {
  const output = document.getElementById("content");
  output.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const element = document.createElement("div");
    const checkBox = document.createElement("input");
    let elementText = document.createElement("p");
    checkBox.setAttribute("type", "checkbox");

    elementText.innerText = array[i].name;

    elementText.style.textDecoration = "none";
    const editBut = document.createElement("button");
    editBut.innerText = "edit";
    const delBut = document.createElement("button");
    delBut.innerText = "delete";

    editBut.onclick = function () {
      const newName = prompt("Enter new task name:");
      editTask(i, newName);
      console.log(array);
    };

    delBut.onclick = function () {
      deleteTask(i);
      console.log(array);
    };

    checkBox.onclick = function () {
      if (checkBox.checked == true) {
        elementText.style.textDecoration = "line-through";
      } else {
        elementText.style.textDecoration = "none";
      }
    };

    element.appendChild(checkBox);
    element.appendChild(elementText);
    element.appendChild(editBut);
    element.appendChild(delBut);
    output.appendChild(element);
  }
}

function addTask() {
  const name = document.getElementById("input-bar").value;

  array.push({ name: name });
  print();
}

// function toggleStatus(index) {
//   array[index].status = "done";  // todo
//   print();
// }

function deleteTask(index) {
  array.splice(index, 1);
  print();
}

function editTask(index, newName) {
  array[index].name = newName;
  print();
}

function checkToggle() {}

let number = document.getElementById("number");
let totalNumber = 0;
let finished = 0;
setInterval(() => {
  if (totalNumber < array.length) {
    // clearInterval();
    totalNumber++;
    number.innerHTML = finished + "/" + totalNumber;
  } else {
    totalNumber = totalNumber - 1;
  }
}, 25);

function circleProc() {
  let circleBar = document.getElementById("circleProgress");
  stroke = circleBar.style.strokeDashoffset;

  stroke = stroke - totalNumber * 1;

  circleBar.style.strokeDashoffset = stroke;

  console.log(totalNumber);
}

function textDecoration(index) {
  array[index].status = "done";

  print();
}
console.log(`sain
  baina`);
