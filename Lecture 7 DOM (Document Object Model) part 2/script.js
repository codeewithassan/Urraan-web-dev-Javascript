// 5. Attributes and Styling

// GET & SET ATTRIBUTE

let div = document.querySelector('div');
// console.log(div);

let id = div.getAttribute('id');
// console.log(id)

let name = div.getAttribute('name');
// console.log(name)

let p = document.querySelector('.para');
// console.log(p.getAttribute('class'));

p.setAttribute("class", "paragraph");
// console.log(p)

// STYLE:-->

let box = document.querySelector('div');
console.log(box.style);
box.style.backgroundColor = "aqua";
box.style.fontSize = "13px";
box.style.fontFamily = "monospace";
box.style.borderTopColor = "green";
box.style.borderBottomColor = "red";
box.style.borderLeftColor = "yellow";
box.style.borderRightColor = "purple";

// 6. DOM Manipulation: Inserting and Deleting Elements (notes)
    // First of all we create an element and then we can insert it ...
// Creating an element 

let newBtn = document.createElement("button");
newBtn.innerText = "CLICK ME";

div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

let heading = document.createElement('h1');
heading.innerHTML = "<i>Hey! I am new</i>";

div.before(heading);

// Remove
// newBtn.remove();
// heading.remove();
// box.remove()
// box.firstChild.remove()
// box.children[0].remove()
// box.lastChild.remove()