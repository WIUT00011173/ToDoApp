function addToList({value}) {

    todoArray.push(
        {
            id: Math.random(),
            text: value,
            isDone: false
        }
    )

    render(todoArray)
    saveTOStorage()
    clearInput()
}

function render (todos = todoArray) {
    toDoWrapper.innerHTML = ""

    for( let todo of todos) {
        const{id, text, isDone} = todo

        const todoDiv = document.createElement("div")
        todoDiv.classList.add("todoDiv")
        todoDiv.innerHTML = `
            <p class="${isDone ? "p-done" : ""}">${text}</p>
            <button class="done" onclick="checkAsDone(${id})" style="display: ${isDone ? "none" :"initial"}">Done</button>
            <button class="delete" onclick="delTodo(${id})">Delete</button>
        `
        toDoWrapper.appendChild(todoDiv)

    }
}

function checkAsDone(id) {
    let doneDo = todoArray.filter(todo => todo.id == id)
    doneDo[0].isDone = true 
    render()
    saveTOStorage()
}

function delTodo(id) {
    todoArray = todoArray.filter(item=> item.id != id)

    render()
    saveTOStorage()
}

function filter({value}) {
    switch (value){
        case "Done":
            render(todoArray.filter(item => item.isDone == true))
            break;
        case "Uncompleted":
            render(todoArray.filter(item => item.isDone == false))    
            break;
        default: render()
    }
}

function clearInput() {
    input.value = ""
}

function saveTOStorage() {
    localStorage.setItem("todos", JSON.stringify(todoArray))
}