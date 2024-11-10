let array = []
    
function print(){
    const output = document.getElementById("content");
    output.innerHTML = ""
    for(i = 0; i<array.length; i++){
    output.innerHTML += '<div id="content"> '+ array[i].name+'<button onclick="editTask()" id="edit-button">'+
    '<svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>'+
  '</button>'+'<button onclick="deleteTask()" id="delete-button">'+
    '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>'+
  '</button>'+'</div>'
    // document.getElementById("number")
    // number++;
}
}


function addTask(){
    const name = document.getElementById("input-bar").value;
    array.push({name: name})
    print()
}

function deleteTask(){
   array.splice(0,1)
  print()
}

function editTask(){
  
    const newName = prompt("Enter new task name:", array[0].name)
    
        array[0].name = newName;
        print();
}

let number = document.getElementById("number");
let totalNumber = 0;
let finished = 0
setInterval(() => {
    if(totalNumber < array.length){
        clearInterval();
          totalNumber++;
        number.innerHTML = totalNumber+ "/" + totalNumber ;
    } else {
      totalNumber= totalNumber - 1;
     
    }

}, 25);

// function circleProc (){
//     // let circleBar = document.getElementById('circleProgress')
//     // let circleBarStyle = window.getComputedStyle(circleBar)
//     // let stroke = parseFloat(circleBarStyle.getPropertyValue("stroke-dashoffset"))
//     // stroke = stroke + 472;
//     // circleBar.style.strokeDashoffset = stroke
//     // console.log(stroke)
//     let circleBar = document.getElementById('circleProgress')
//     stroke = circleBar.style.strokeDashoffset 

//             stroke = stroke - (totalNumber * 10)
        
//         // let totalNumberMinus = totalNumber 
       
//         circleBar.style.strokeDashoffset = stroke
    
   
//     console.log(stroke)







// }
