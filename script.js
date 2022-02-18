const imgContainer = document.querySelector("#imgContainer")
const form = document.querySelector("#form")
let inputField = document.querySelector("#input")

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let input = inputField.value

    let text = document.createElement("p")
    text.innerText = input
    text.setAttribute("id", "notepadText")
    imgContainer.appendChild(text)
})
