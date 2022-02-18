const imgContainer = document.querySelector("#imgContainer")
const form = document.querySelector("#form")
let inputField = document.querySelector("#input")

form.addEventListener('submit', (event) => {
    removePrevious()
    event.preventDefault()
    let input = inputField.value

    let text = document.createElement("p")
    text.innerText = input
    text.setAttribute("id", "notepadText")
    imgContainer.appendChild(text)
})


// Remove previous element
function removePrevious(){
    // if element already exists in document, remove it
    var elem = document.querySelector("#notepadText")
    if(document.body.contains(elem))
        elem.parentNode.removeChild(elem)
}
