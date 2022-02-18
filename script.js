
const imgContainer = document.querySelector("#imgContainer")
const form = document.querySelector("#form")
const saveButton = document.querySelector("#saveButton")
let inputField = document.querySelector("#input")

// Get data from form and append on image
form.addEventListener('submit', (event) => {
    // If element already exists, call removePrevious Function
    removePrevious()
    event.preventDefault()
    let input = inputField.value

    // Create new <p> element and append into image container
    let text = document.createElement("p")
    text.innerText = input
    text.setAttribute("id", "notepadText")
    imgContainer.appendChild(text)
})


// Remove previous element from DOM
function removePrevious(){
    // if element already exists in document, remove it
    var elem = document.querySelector("#notepadText")
    if(document.body.contains(elem))
        elem.parentNode.removeChild(elem)
}

saveButton.addEventListener('click', (event) => {
    console.log("test")
    html2canvas(imgContainer).then(function(canvas){
        imgContainer.appendChild(canvas)
    })
})

