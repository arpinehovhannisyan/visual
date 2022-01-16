let header = document.getElementById("header")



window.addEventListener("scroll", () => {
    if (window.scrollY > 110) {
        header.classList.add("scroll")


    }
    else {
        header.classList.remove("scroll")
    }

})


let home = document.getElementById("home")
let about = document.getElementById("about")
let team = document.getElementById("team")
let portfolio = document.getElementById("portfolio")
let portfoli = document.getElementById("portfoli")
let contact = document.getElementById("contact")



home.addEventListener("click", () => {

    window.scrollTo(0, 0)

})


about.addEventListener("click", () => {

    window.scrollTo({ top: 1000, left: 0, behavior: "smooth" })


})

team.addEventListener("click", () => {
    window.scrollTo({ top: 2000, left: 0, behavior: "smooth" })


})

portfolio.addEventListener("click", () => {
    window.scrollTo({ top: 3500, left: 0, behavior: "smooth" })

})
portfoli.addEventListener("click", () => {
    window.scrollTo({ top: 6000, left: 0, behavior: "smooth" })

})


contact.addEventListener("click", () => {
    window.scrollTo({ top: 8000, left: 0, behavior: "smooth" })

})


window.addEventListener("scroll", () => {
    if (window.scrollY >= 0 && window.scrollY < 1000) {
        home.classList.add("aktive")
    }
    else {
        home.classList.remove("aktive")
    }



})

window.addEventListener("scroll", () => {
    if (window.scrollY >= 1000 && window.scrollY < 2000) {
        about.className = "aktive"
    }
    else {
        about.classList.remove("aktive")
    }



})
window.addEventListener("scroll", () => {
    if (window.scrollY >= 2000 && window.scrollY < 3500) {
        team.className = "aktive"
    }
    else {
        team.classList.remove("aktive")
    }



})
window.addEventListener("scroll", () => {
    if (window.scrollY >= 3500 && window.scrollY < 6000) {
        portfolio.className = "aktive"
    }
    else {
        portfolio.classList.remove("aktive")
    }



})

window.addEventListener("scroll", () => {
    if (window.scrollY >= 6000 && window.scrollY < 8000) {
        portfoli.className = "aktive"
    }
    else {
        portfoli.classList.remove("aktive")
    }

})


window.addEventListener("scroll", () => {
    if (window.scrollY >= 8000 && window.scrollY < 9000) {
        contact.className = "aktive"
    }
    else {
        contact.classList.remove("aktive")
    }



})

let prog1 = document.getElementById("prog1")
let prog2 = document.getElementById("prog2")
let prog3 = document.getElementById("prog3")
let tokos = document.getElementById("tokos")
let procent1 =document.getElementById("procent1")
let procent2 =document.getElementById("procent2")
let procent3 =document.getElementById("procent3")

window.addEventListener("scroll", () => {
    if (window.scrollY >= 1090 && window.scrollY < 1700) {
        prog1.style.width = "90%"
        prog2.style.width = "80%"
        prog3.style.width = "70%"
        procent1.style.left ="87%"
        procent2.style.left ="77%"
        procent3.style.left = "67%"
        procent1.style.transition = ".8s"
        procent2.style.transition = ".8s"
        procent3.style.transition = ".8s"
        prog1.style.transition = ".8s"
        prog2.style.transition = ".8s"
        prog3.style.transition = ".8s"

    }
    else {
        procent1.style.left ="0"
        procent2.style.left ="0"
        procent3.style.left ="0"
        prog1.style.width = "0"
        prog2.style.width = "0"
        prog3.style.width = "0"


    }
})

console.log(pageYOffset)







window.addEventListener("scroll", () => {


    for(let i = 0;i <= 90;i++){
    if (window.scrollY > 1100 && window.scrollY < 1600) {
         tokos.innerHTML = i + "%"
     }

    else{
        tokos.innerHTML = "0" + "%"
    }}
     
     
})











