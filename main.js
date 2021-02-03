// Selectors
const totoInput = document.querySelector('.list-input')
const todoButton = document.querySelector('.todo-button')
const totoList = document.querySelector('.todo-list')

// Event Listener
todoButton.addEventListener('click', () => {
    event.preventDefault();
    // create Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = "hey";
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // create buttons
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    
});


// function addTodo(event){
//     event.preventDefault()
//     console.log("hello World");
// }

