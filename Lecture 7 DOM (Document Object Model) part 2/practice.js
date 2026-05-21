function generateRandomColor() {
    let r = Math.floor(Math.random() * 255)   
    let g = Math.floor(Math.random() * 255)   
    let b = Math.floor(Math.random() * 255)   

    return `rgb(${r},${g},${b})`
}

let newBtn = document.createElement('button')
newBtn.innerText = "toggle color";
newBtn.style.backgroundColor = "aqua";
newBtn.style.color = "black";
newBtn.style.fontSize = "16px";
newBtn.style.border = '1px solid gray';
newBtn.style.borderRadius = '3px';
newBtn.style.padding = '8px';

let body = document.querySelector('body');
body.append(newBtn)

let para = document.querySelector('p');
// para.classList.add('class-2')
function classChange() {
    if (para.classList.contains('class-2' && 'class-1')) {
        para.style.color = generateRandomColor()
        para.style.backgroundColor = generateRandomColor()
    }else{
        para.style.color = "";
    }
    
}
newBtn.addEventListener('click', () => {
    classChange();
})

// console.log(Math.floor(Math.random() * 100));
