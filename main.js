const toggleBtn = document.getElementById("btn")

const moveBtn = document.querySelector(".circle")

const basicBtn = document.querySelector(".basic .more")
const proBtn = document.querySelector(".pro .more")
const masterBtn = document.querySelector(".master .more")

toggleBtn.addEventListener("click", ()=> {
    toggleBtn.classList.toggle("toggle-btn")
    moveBtn.classList.toggle("move-btn-circle")
    if(toggleBtn.classList.contains("toggle-btn")) {
        document.querySelector(".basic h1").textContent = "$19.99"
        document.querySelector(".pro h1").textContent = "$24.99"
        document.querySelector(".master h1").textContent = "$39.99"
    } else {
        document.querySelector(".basic h1").textContent = "$199.99"
        document.querySelector(".pro h1").textContent = "$249.99"
        document.querySelector(".master h1").textContent = "$399.99"
    }
})
basicBtn.addEventListener("click", ()=> {
    basicBtn.classList.toggle("more-toggle")
})
proBtn.addEventListener("click", ()=> {
    proBtn.classList.toggle("more-pro-toggle")
})
masterBtn.addEventListener("click", ()=> {
    masterBtn.classList.toggle("more-toggle")
})