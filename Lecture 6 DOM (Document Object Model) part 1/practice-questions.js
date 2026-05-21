let heading = document.querySelector('h1')
heading.innerText = heading.innerText + " from Urraan students."
// let text = " from Urraan students."
// heading.append(text)

let divs = document.querySelectorAll('.box')

// div[0].innerText = "new unique value 1"
// div[1].innerText = "new unique value 2"
// div[2].innerText = "new unique value 3"

// Better way
let idx = 1;
for (const div of divs) {
    // console.log(div.innerText)
    // div.innerText = "new unique div " + idx++;
    div.innerText = `new unique div ${idx}`
    idx++;
}
