// let todoTasksText = ["Walk Chilli", "Make Dinner"];
// let todoTasksStatus = [false, true]; // boolean values here, where false means the task is not complete and true mens task is complete
// updateTodoList();
// let todoList = document.getElementById("todo-list"); //what does this do?

let todoTasksText = [];
let todoTasksStatus = []; 
let todoList = document.getElementById("todo-list"); //what does this do?

function addTask() {
    let newTask = document.getElementById("new-task-text");
    if (newTask.value) {
        todoTasksText.push(newTask.value);
        todoTasksStatus.push(false);
        newTask.value = "";
        console.log(todoTasksText);
        updateTodoList();
    }
}

function updateTodoList() {
    let todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    todoTasksText.forEach((task, index) => {
        let newTodoTaskElement = createNewTodoTaskElement(task, index);
        todoList.appendChild(newTodoTaskElement);
        });
}

function createNewTodoTaskElement(task, index) {
    let newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;
    
    if (todoTasksStatus[index] == true) {
        newTodoTaskTextElement.classList.add("complete");
    } //add a class to the tasks that are done

    let newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);
    
    //add a button that we will use to mark tasks as complete:
    let completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
    completeButtonElement.onclick = function () {
        toggleComplete(index);
    }; // function that makes button functional
    newTodoTaskElement.appendChild(completeButtonElement); 

    todoList.appendChild(newTodoTaskElement);
    return newTodoTaskElement;
}

todoTasksText.forEach((task, index) => {
    createNewTodoTaskElement(task, index);
});

function toggleComplete(index) {
    if (todoTasksStatus[index] == false) {
        todoTasksStatus[index] = true;
    } else {
        todoTasksStatus[index] = false;
    }
    updateTodoList();
}

//add clear the list

/* 
function clearList() {
    todoList = [];
    updateTodoList();

}   
*/

//create functions
//move item up/move down the list
// buttons = up/down/completed/clear list

//display those tasks on the page

