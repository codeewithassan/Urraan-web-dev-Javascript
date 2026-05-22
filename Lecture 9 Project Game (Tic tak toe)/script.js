let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn')
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')

let turn0 = true; //playerX, playerO
let turnX ;

const winPatterens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () =>{
    for(let box of boxes){  
        turn0 = true;    
        enabledBoxes(); 
        msgContainer.classList.add('hide')   
        count = 0;    
    }
}
const disabledBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
        // console.log(box)
    }
}
const setBoxStatus = (status) =>{
    for (let box of boxes){
        box.disabled = status;
    }
}

const enabledBoxes = () =>{
    for (let box of boxes){
        // box.disabled = false;
        setBoxStatus(false);
        // console.log(box)
        box.innerText = "";
    }
}

let count = 0;
boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        if (turn0) { //player0
            box.innerText = "X"
            box.classList.add('turn0')
            box.classList.remove('turnx')
            turn0 = false;
        } else { //playerX
            box.innerText = "O"
            box.classList.add('turnx')
            box.classList.remove('turn0')
            turn0 = true;
        }
        // disabledBoxes()
        checkWinner();

        box.disabled = true;
        count++;
        
        let isWinner = checkWinner();
        
        if(count == 9 && !isWinner){
            draw();
        }
    })
});
    // resetBtn.addEventListener('click', ()=>{
    //     box.innerText = "";
    //     enabledBoxes();
    //     msgContainer.classList.add('hide')
    // });

const showWinner = (winner) =>{
    msg.innerText = `Congratulations winner is ${winner}`
    msgContainer.classList.remove('hide')
    disabledBoxes();
}
const draw = () =>{
    msg.innerText = "Game draw"
    msgContainer.classList.remove('hide')
    disabledBoxes();
}
const checkWinner = () =>{
    for (let pattern of winPatterens){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        // console.log(pattern[0], pattern[1], pattern[2])
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("Winner");
                showWinner(pos1Val);
                return true;
            }
        }
    } return false;
}
resetBtn.addEventListener('click', resetGame)
newGameBtn.addEventListener('click', resetGame)