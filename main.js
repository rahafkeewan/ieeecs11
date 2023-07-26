let addTask = Array.from(document.querySelectorAll(".add-task input"));
let tasksBox =document.querySelector(".tasks");
let tasks = [];
let totalNumber = document.querySelector(".totalNumber");;

addTask[1].addEventListener('click',()=>{
    if(addTask[0].value != ""){
        tasks.push(addTask[0].value)
        createTask();
        addTask[0].value = ""
        window.localStorage.tasks =  tasks; 
    }
})

//function
let createTask = () =>{
    //remove all element
    tasksBox.innerHTML = "";
    totalNumber.innerHTML = tasks.length;
    
    tasks.forEach((ele ,i)=>{
        //create box-task
        let box = document.createElement("div");
        box.className = "item";
        
        //create task-text
        let taskText = document.createElement("p");
        taskText.className = "task-text";
        taskText.append(ele);
        
        //create delete-button
        let deleteBtn =document.createElement("button");
        deleteBtn.className = "btn btn-red";
        deleteBtn.id = i;
        deleteBtn.append("Delete")
        deleteBtn.addEventListener("click",()=>{
            tasks.splice(deleteBtn.id,1);
            window.localStorage.tasks =  tasks;
            createTask();
        });
        
        //Append task
        box.append(taskText);
        box.append(deleteBtn);
        tasksBox.append(box);
        
    });
}
if(window.localStorage.tasks){
    let x = window.localStorage.tasks
    tasks = x.split(",");
    createTask();
}  