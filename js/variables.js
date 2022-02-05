const toDoWrapper = document.querySelector(".toDosList")
const input = document.querySelector("#input")
const select = document.querySelector("#select")


let todoArray = JSON.parse(localStorage.getItem("todos")) || []
