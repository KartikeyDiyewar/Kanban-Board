const addContainerEvent = (container) =>{
    container.addEventListener("dragover",(e)=>{

    const ele = document.querySelector('.isdragging');


    const closestElement = getClosestElement(container,e.clientY);


    if(closestElement){
        container.insertBefore(ele, closestElement);
    }
    else{
        container.appendChild(ele);
    }
    })
}

const containers = document.getElementsByClassName("container");
for(let i=0;i<containers.length;i++){
    addContainerEvent(containers[i]);
}

const getClosestElement = (container,yAxis) =>{
    const taskInContainer = container.querySelectorAll(".task:not(.isdragging)");

    let closestElement = null;
    let closestDistance = Number.NEGATIVE_INFINITY;

    taskInContainer.forEach((ele) => {
        const boundry = ele.getBoundingClientRect();
        const top = boundry.top;

        const distance = yAxis-top;

        if(distance<0 && distance > closestDistance){
            closestDistance = distance;
            closestElement = ele;
        }
    });

    return closestElement;
}

const newContainerButton = document.getElementById('new_container');
const containerBox = document.getElementById('container_box');

newContainerButton.addEventListener('click',(e)=>{
    const newContainer = document.createElement('div');
    newContainer.classList.add('container');
    const containerId = prompt("Enter the box Name");
    newContainer.setAttribute('id',containerId);
    const heading = document.createElement('h4');
    heading.classList.add('box_heading');
    heading.innerText = containerId;
    if(containerId.trim()!="")
    containerBox.insertBefore(newContainer,newContainerButton);
    newContainer.appendChild(heading);
    addContainerEvent(newContainer);
})