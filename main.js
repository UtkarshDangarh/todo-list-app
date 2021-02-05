// Selectors
const todoInput = document.querySelector('.list-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// Event Listener
todoButton.addEventListener('click', () => {
    event.preventDefault();
    // create Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // create buttons
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    // Append to List
    todoList.appendChild(todoDiv);
    // Clear Input Value
    todoInput.value = "";
});

todoList.addEventListener('click', deleteCheck);
function deleteCheck(e){
    const item =  e.target;
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall")
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
    }

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}




// function addTodo(event){
//     event.preventDefault()
//     console.log("hello World");
// }

