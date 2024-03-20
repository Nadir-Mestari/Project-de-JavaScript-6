
const sidebar = document.getElementById("side-bar")
const content = document.querySelector(".content")


btn.addEventListener("click", () => {

    sidebar.classList.toggle("btn-remove")



})

content.addEventListener("click", () => {
    sidebar.classList.remove("btn-remove")
})