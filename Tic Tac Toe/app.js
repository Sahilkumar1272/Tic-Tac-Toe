let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let gameModeSelect = document.querySelector('#game-mode');
let startGameBtn = document.querySelector('#start-game');
let gameModeSelection = document.querySelector('#game-mode-selection');
let gameContainer = document.querySelector('#game-container');

let turno = true; // true for player O, false for player X
let gameActive = false;
let isComputerGame = true; // Default to computer game

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const startGame = () => {
    isComputerGame = gameModeSelect.value === 'computer';
    gameModeSelection.classList.add('hide');
    gameContainer.classList.remove('hide');
    resetBtn.classList.remove('hide');
    resetGame();
}

const resetGame = () => {
    turno = true;
    gameActive = true;
    enableBoxes();
    msgContainer.classList.add('hide');
    msg.innerText = '';
}

const showGameModeSelection = () => {
    gameContainer.classList.add('hide');
    gameModeSelection.classList.remove('hide');
    resetBtn.classList.add('hide');
}

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = '';
    });
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
    gameActive = false;
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let [a, b, c] = pattern;
        if (boxes[a].innerText && 
            boxes[a].innerText === boxes[b].innerText && 
            boxes[a].innerText === boxes[c].innerText) {
            showWinner(boxes[a].innerText);
            return true;
        }
    }

    // Check for a draw
    if (Array.from(boxes).every(box => box.innerText !== "")) {
        msg.innerText = "It's a draw!";
        msgContainer.classList.remove('hide');
        gameActive = false;
        return true;
    }

    return false;
}
const findWinningMove = (player) => {
    for (let i = 0; i < 9; i++) {
        if (boxes[i].innerText === '') {
            boxes[i].innerText = player;
            for (let pattern of winPattern) {
                let [a, b, c] = pattern;
                if (boxes[a].innerText === player && 
                    boxes[b].innerText === player && 
                    boxes[c].innerText === player) {
                    boxes[i].innerText = '';
                    return i;
                }
            }
            boxes[i].innerText = '';
        }
    }
    return -1;
}

const computerMove = () => {
    if (!gameActive) return;

    // Check if computer can win
    let winningMove = findWinningMove('X');
    if (winningMove !== -1) {
        makeMove(winningMove, 'X');
        return;
    }

    // Block player's winning move
    let blockingMove = findWinningMove('O');
    if (blockingMove !== -1) {
        makeMove(blockingMove, 'X');
        return;
    }

    // Try to take the center
    if (boxes[4].innerText === '') {
        makeMove(4, 'X');
        return;
    }

    // Try to take corners
    const corners = [0, 2, 6, 8];
    let availableCorners = corners.filter(i => boxes[i].innerText === '');
    if (availableCorners.length > 0) {
        let randomCorner = availableCorners[Math.floor(Math.random() * availableCorners.length)];
        makeMove(randomCorner, 'X');
        return;
    }

    // Take any available side
    const sides = [1, 3, 5, 7];
    let availableSides = sides.filter(i => boxes[i].innerText === '');
    if (availableSides.length > 0) {
        let randomSide = availableSides[Math.floor(Math.random() * availableSides.length)];
        makeMove(randomSide, 'X');
        return;
    }
}

const makeMove = (index, player) => {
    boxes[index].innerText = player;
    boxes[index].disabled = true;
    turno = !turno;
    if (!checkWinner() && isComputerGame && !turno) {
        setTimeout(computerMove, 3000); // Changed to 3000ms (3 seconds)
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (gameActive && box.innerText === "") {
            box.innerText = turno ? 'O' : 'X';
            box.disabled = true;
            
            if (!checkWinner()) {
                turno = !turno;
                if (isComputerGame && !turno) {
                    setTimeout(computerMove, 2000); // Changed to 3000ms (3 seconds)
                }
            }
        }
    });
});

newGameBtn.addEventListener('click', showGameModeSelection);
resetBtn.addEventListener('click', showGameModeSelection);
startGameBtn.addEventListener('click', startGame);

// Initialize the game
showGameModeSelection();
