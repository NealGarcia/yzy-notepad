const imgContainer = document.querySelector("#imgContainer")
const form = document.querySelector("#form")
let input = document.querySelector("#input")


form.addEventListener('submit', (event) => {
    event.preventDefault()
    let text = input.value
    console.log(text)
})

var text = document.createElement("p")
text.innerHTML = input.value;