const ToDos = []
function addtodo() {
    const val = document.querySelector("input").value
    ToDos.push(val)
    render()
}
function deletetodo(ind) {
    ToDos.splice(ind, 1)
    render()
}

function render() {
    const UltimateParentDiv = document.getElementById("newtodo")
    UltimateParentDiv.innerHTML = ""
    for (let i = 0; i < ToDos.length; i++) {
        let val = ToDos[i]

        const parentEl = document.createElement("div")
        parentEl.setAttribute("id", i)

        const spanEl = document.createElement("span")
        spanEl.innerHTML = val

        const buttonEl = document.createElement("button")
        buttonEl.innerHTML = "Delete"
        buttonEl.setAttribute("onclick", "deletetodo(" + i + ")")

        parentEl.appendChild(spanEl)
        parentEl.appendChild(buttonEl)

        UltimateParentDiv.appendChild(parentEl)
    }
}