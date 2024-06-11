// let btnSaludar = document.querySelector("#btnSaludar")

// // escuchador de eventos
// // recibe dos pasametros(lo que escuchara, y que funcion va a ejecutar)
// btnSaludar.addEventListener("click", function () {
//     alert("Hola ¿qué tal?")
// })


// console.log(btnSaludar)


// window.addEventListener("load", () => {
//     alert("hola")
// })

// let colors = ["red", "orange", "blue", "purple"]

// let boxOne = document.getElementById("boxOne")
// boxOne.style.border = "1px solid red"
// boxOne.style.width = "500px"
// boxOne.style.height = "500px"
// boxOne.style.backgroundColor = "green"



// function saludar(event, saludo) {
//     alert(`hola ${saludo}`)
//     console.log(event)
// }



// // boxOne.addEventListener("click", function () {
// //     console.log("hola que tal")
// //     saludar("Hola que onda desde el escuchaeventos")

// // })

// // algunos casos necesitare el evento 
// boxOne.addEventListener("click", (event) => saludar(event, "Hola desde mi sintaxis dulce"))


// let body = document.body

// let numOne = document.createElement("input")
// let numTwo = document.createElement("input")
// let numResult = document.createElement("input")


// body.appendChild(numOne)
// body.appendChild(numTwo)
// body.appendChild(numResult)


// let numOne = document.querySelector("#numOne")
// let numTwo = document.querySelector("#numTwo")
// let numResult = document.querySelector("#numResult")

// let p = document.querySelector("#letterResult")

// let btnResult = document.querySelector("#btnResult")

// numOne.addEventListener("input", (event) => {
//     console.log(event.target.value)
// })


// numTwo.addEventListener("input", function (event) {
//     console.log(event.target.value)
// })


// btnResult.addEventListener("click", () => {
//     numResult.value = Number(numOne.value) + Number(numTwo.value)
// })


// let btnSaluda = document.querySelector("#btnSaluda")




// let listenerFunction = function () {
//     alert("First click");
//     document.getElementById("onTimeButton").removeEventListener("click", listenerFunction);
// }


// function inicialize() {
//     document.getElementById("onTimeButton").addEventListener("click", listenerFunction);
// }

// inicialize()

let body = document.body
body.style.display = "flex"
body.style.justifyContent = "center"


let divRoot = document.querySelector("#root")

let title = document.createElement("h1")
title.textContent = "¿Quieres ser mi amiga?"

let buttonOne = document.createElement("button")
buttonOne.textContent = "Si"
divRoot.appendChild(buttonOne)
buttonOne.classList.add("button-one")


let buttonTwo = document.createElement("button")
buttonTwo.textContent = "No"
divRoot.appendChild(buttonTwo)
buttonTwo.classList.add("button-two")

function moveButton(num) {
    buttonTwo.style.bottom = `${num}px`
    buttonTwo.style.right = `${num}px`
}


buttonTwo.addEventListener("mouseover", () => moveButton(Math.floor(Math.random() * 560)))





divRoot.appendChild(title)
divRoot.classList.add("container")
