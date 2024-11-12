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
  
      circleLoader()
    };
    element.appendChild(checkBox);
    element.appendChild(elementText);
    element.appendChild(editBut);
    element.appendChild(delBut);
    output.appendChild(element);

  }

}

function circleLoader (){
  let circleBar = document.getElementById("circleProgress")
  let stroke = circleBar.style.strokeDashoffset;
  let divided = stroke / totalNumber ;
  // let totalDivided = divided + divided
  
  
  
  // stroke = stroke - totalDivided

  circleBar.style.strokeDashoffset = Math.ceil(stroke-divided)
 console.log(totalNumber)
  console.log(stroke)
}

setInterval(() => {
  if (totalNumber < array.length) {
    // clearInterval();
    totalNumber++;
    number.innerHTML = finished + "/" + totalNumber;
 
  } 

  else {
    totalNumber = totalNumber - 1;
  } 
}, 25);





























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



let number = document.getElementById("number");
let totalNumber = 0;
let finished = 0;





