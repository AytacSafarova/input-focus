let collaj = document.querySelectorAll("input")
let first_input = document.getElementById("first_input")

collaj.forEach((element) => {
    element.addEventListener('keyup', () => {
        console.log(element.nextElementSibling)
        element.nextElementSibling.focus()
        console.log('focssed')
    })
})

first_input.addEventListener('paste', pasteinfo)
let arr = []
function pasteinfo(e) {
    e.preventDefault()
    navigator.clipboard.readText()
        .then(
            (cliptext) => {
                arr = cliptext.split('')
                arr.forEach((item, i) => {
                    collaj[i].value = item;
                })
                console.log(arr)
            })
}