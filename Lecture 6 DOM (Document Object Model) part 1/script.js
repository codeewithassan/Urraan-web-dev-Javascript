// console.log("Hello")
// window.console.log("Hello2")

// console.dir(document.body)
// console.log(document.head)
// console.log(document.body)

// document.body.childNodes[1].innerText = "ABCD" // We can dynamically change our webpage through js.

// DOM Manupolation in notes ---->

let heading = document.getElementById('heading');
// heading.style.color = 'green';
// console.log(heading);

let headings = document.getElementsByClassName('heading')
// console.dir(headings)
// console.log(headings)

let paras = document.getElementsByTagName('p')
// console.dir(paras)
// console.log(paras)

// let firstEl = document.querySelector('p')
let firstEl = document.querySelector('#button')
// console.log(firstEl)

let allEl = document.querySelectorAll('p')
// console.log(allEl)

let collection = document.querySelector('div').children
console.log(collection)

let h2 = document.querySelector('h2')
h2.innerHTML = "<div>New Heading</div>"
let list = document.querySelector('.div')
// list.innerText = "new text"
let listUl = document.querySelector('ul')
listUl.firstElementChild.innerText = "Banana"
listUl.children[1].innerText = "Grapes"
listUl.lastChild.innerText = "Apple" // it returns a empty text node
listUl.lastElementChild.innerText = "Apple"

let hidden = document.querySelector('.hidden-heading').textContent
console.log(hidden);