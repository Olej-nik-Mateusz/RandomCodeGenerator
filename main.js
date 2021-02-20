const button = document.querySelector("button");
const characters = `QWERTYUIOPASDFGHJKLZXCVBNM1234567890`;
const section = document.createElement("section")

const init = () => {

    document.body.appendChild(section)
    section.style.width = "100vw"
    section.style.marginTop = "20vh"

}

const genCode = () => {
    console.log("works");
    for (i = 0; i < 10; i++) {
        const code = "kod"
        const div = document.createElement("div")
        div.textContent = code
        section.appendChild(div)
        div.style.width = "20vw"
        div.style.margin = "0 auto"
        div.style.textAlign = "center"
    }

}

button.addEventListener(`click`, genCode)

init()