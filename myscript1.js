const todo = document.getElementById("todo_container");

const taskEvent = (task) =>{
    task.addEventListener('dragstart',(e)=>{
        e.target.classList.add('isdragging');
    })
    task.addEventListener('dragend',(e)=>{
        e.target.classList.remove('isdragging');
    })
}
 
const add = document.getElementById("add_button");
add.addEventListener('click',(e)=>{
    const newinput = document.getElementById("new_item");
    const newTask = document.createElement("p");
    newTask.classList.add("task");
    newTask.setAttribute('draggable','true');
    newTask.innerText = newinput.value;
    if(newTask.innerText.trim()!=""){
    todo.appendChild(newTask);
    }
    taskEvent(newTask);
    newinput.value = "";
})

