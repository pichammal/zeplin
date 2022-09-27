const email = document.getElementById("email")
const Password = document.getElementById("password")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener("submit", (e) => {
    let messages = []
    if (email.value == null || email.value == "") {
        messages.push('email is wrong')

    }
    if (messages.length > 6) {
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }
})