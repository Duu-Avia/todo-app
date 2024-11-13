let array = [];

function print() {
  const output = document.getElementById("content");

  output.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const element = document.createElement("div");
    const textAndCheckbx = document.createElement("div");
    textAndCheckbx.setAttribute("class", "textAndCheckbx");
    const checkBox = document.createElement("input");
    element.setAttribute("class", "div-container");
    let elementText = document.createElement("p");
    elementText.setAttribute("class", "textstyle");
    checkBox.setAttribute("type", "checkBox");
    checkBox.setAttribute("class", "checkBox");

    elementText.innerText = array[i].name;
    elementText.style.textDecoration = "none";
    const buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class", "buttonDiv");
    const editBut = document.createElement("span");
    editBut.setAttribute("class", "editBut");
    editBut.innerHTML =
      '<span class="material-symbols-outlined">' + "brush" + "</span>";
    const delBut = document.createElement("span");
    delBut.innerHTML =
      '<span class="material-symbols-outlined">' + "delete" + "</span>";
    delBut.setAttribute("class", "delBut");
    editBut.onclick = function () {
      const newName = prompt("Enter new task name:");
      editTask(i, newName);
    };

    delBut.onclick = function () {
      deleteTask(i);
    };

    checkBox.onclick = function () {
      if (checkBox.checked == true) {
        elementText.style.textDecoration = "line-through";
        finished++;
      } else {
        elementText.style.textDecoration = "none";
        finished--;
      }
      circleLoader();
    };
    element.appendChild(textAndCheckbx);
    textAndCheckbx.appendChild(checkBox);
    textAndCheckbx.appendChild(elementText);
    buttonDiv.appendChild(editBut);
    buttonDiv.appendChild(delBut);
    element.appendChild(buttonDiv);
    output.appendChild(element);
  }
}

let number = document.getElementById("number");
let totalNumber = 0;
let finished = 0;

setInterval(() => {
  if (totalNumber < array.length) {
    clearInterval();
    totalNumber++;
    number.innerHTML = finished + "/" + totalNumber;
  } else {
    totalNumber = totalNumber - 1;
  }
}, 25);

function circleLoader() {
  let circleBar = document.getElementById("circleProgress");
  let stroke = circleBar.style.strokeDashoffset;
  const divided = 472 / array.length;
  circleBar.style.strokeDashoffset = Math.ceil(stroke - divided);
  console.log(array.length);
  console.log(stroke);
}

function addTask() {
  const name = document.getElementById("input-bar").value;

  array.push({ name: name });
  print();
}

function deleteTask(index) {
  array.splice(index, 1);
  print();
}

function editTask(index, newName) {
  array[index].name = newName;
  print();
}
