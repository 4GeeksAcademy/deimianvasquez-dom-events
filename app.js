
let divRoot = document.querySelector("#root")
divRoot.innerHTML = "<h1>Hola ¿qué tal desde javascript?</h1>"
// divRoot.textContent = "<h1>Hola ¿qué tal desde javascript?</h1>"
divRoot.removeAttribute("name")
divRoot.removeAttribute("class")
divRoot.setAttribute("class", "root-class")

let ul = document.querySelector("ul")
let body = document.body
let h1Body = document.createElement("h1")
h1Body.innerHTML = "Body aquí tu hijo"

body.insertBefore(h1Body, body.children[0])
h1Body.classList.add("title")
h1Body.classList.add("re-title")

console.log(body.children)


// for (let i = 0; i < ul.children.length; i++) {
//     if (i % 2 == 0) {
//         ul.children[i].style.color = "red"
//     } else {
//         ul.children[i].style.color = "blue"
//     }
// }

let li = document.createElement("li")
li.textContent = "item 5"

ul.appendChild(li)
ul.removeChild(ul.children[1])
ul.children[ul.children.length - 1].remove()


// Estilos en linea divRoot

/*
body{
    background-color:"red"
    border:"1px solid red"
    justify-content:space-between
}

body{
     backgroundColor:"red";
     border:"1px solid red"
    justifyContent:"space-between"
}

*/
divRoot.style.backgroundColor = "red"
divRoot.style.justifyContent = "space-between"
h1Body.classList.remove("re-title")


let ulNumber = document.createElement("ul")
ulNumber.setAttribute("id", "ulNumber")
divRoot.appendChild(ulNumber)

for (let i = 1; i < 101; i++) {
    let liNumber = document.createElement("li")
    liNumber.innerHTML = `Hola soy el número ${i}`
    ulNumber.appendChild(liNumber)

    if (i % 2 == 0) {
        liNumber.style.backgroundColor = "gray"
    }
}



console.log(li)