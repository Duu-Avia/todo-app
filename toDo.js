
// const inputBox = document.getElementById("input-box");
// const newTaskButton = document.getElementById("new-task-button").addEventListener('click',addTask());

function addTask(){
const inputBox = document.getElementById("input-box");
const container = document.getElementById("task-list");
const taskText = inputBox.value;

container.innerHTML += '<li class="list">'+
'<input type="checkbox" id="check-1">'+
'<label class="custom-checkbox" for="check-1">'+
  '<svg fill="transparent" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">'+
    '<path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>'+
'</label>'+
'<label for="check-1" class="todo-text">'+taskText+'</label>'+
'<button class="edit-button">'+
  '<svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>'+
'</button>'+
'<button class="delete-button">'+
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>'+
'</button>'+
'</li>'


inputBox.value = ""
}

function deleteTask () {

}



// function container() {
//   const container = document.getElementById("task-list");
//   container.innerHTML = "";
//   for (let i = 0; i < tasks.length; i++) {
//     container.innerHTML +=
//       '<div id="area">' + tasks[i].name + " " + tasks[i].status + "</div>";
//   }
// }

// function addTask() {
//   const name = prompt("write a new task");

//   document.getElementById("area").textContent = name;
//   tasks.push({ name: name, status: "todo" });
//   container();
// }
