//Select elements
const btn = document.getElementById("button")

const text = document.getElementById("text")

const list = document.getElementById("ul")

//Activate function
btn.addEventListener("click", newTask)

function newTask() {

    const toDo = text.value

    if (toDo !== "") {
        const newText = "<li>"+`${toDo}`+"<span><button class='ok'>OK</button><button class='delete'>X</button></span></li>"

        const position = "afterbegin"

        list.insertAdjacentHTML(position, newText)

        text.value = ""
    }
}

//Função para finalizar ou apagar task
let element = ""
function select(event) {

    element = event.target

    let father = element.parentElement

    let grandFather = father.parentElement

    if (element.innerText === "X") {
        grandFather.remove()
    }
    if (element.innerText === "OK") {
        grandFather.classList.add("done-task")
    }
    
}
list.addEventListener("click", select)