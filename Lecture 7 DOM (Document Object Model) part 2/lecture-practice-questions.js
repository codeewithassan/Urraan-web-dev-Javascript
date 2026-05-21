let newBtn = document.createElement('button');

newBtn.innerText = "click me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "black";

let body = document.querySelector('body');
body.prepend(newBtn)

let para = document.querySelector('p');
para.classList.add('class-2')