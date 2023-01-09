let playerText = document.getElementById("PlayerText")
let play = document.getElementById("play")
let boxes = Array.from(document.getElementsByClassName("box"))

const O = "O"
const X = "X"
let currentPlayer = X

let spaces = Array(9).fill(null)


const startGame = () => {
    boxes.forEach(box => box.addEventListener("click", boxClicked))
    
}


function boxClicked(event) {
    //console.log(event)
    const id = event.target.id

    //check for empty box - add x or o
    if(!spaces[id]) {
        spaces[id] = currentPlayer
        event.target.innerText = currentPlayer

        if(playerWon() !==false) {
            playerText = `${currentPlayer} wins!!`

            return
    

        }

        currentPlayer = currentPlayer == X ? O : X
    }
}

// assigning all win conditions (3 in a row) based on target id
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


function playerWon() {
    for (const condition of winConditions) {
        let [a, b, c] = condition
        if(spaces[a] && (spaces[a] === spaces[b] && spaces[a] === spaces[c])) {
          return [a,b,c]
  
        }

    }
    return false
  

}



play.addEventListener("click", restart)

function restart() {
    spaces.fill(null)

    boxes.forEach ( box => {
        box.innerText = " "
    })

    currentPlayer = X
}


startGame()