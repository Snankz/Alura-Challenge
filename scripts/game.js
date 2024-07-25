
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const gameBoard = document.querySelector("#game-board1");
const gameStart = document.querySelector("#start-game");
const newGame = document.querySelector("#new-game");

let gameOver = 0;

let pipePosition;
let marioPosition;

const jumpDelay = 10;
let lastJump = 0;


// Faz o Mario pular
// Adiciona latencia a a frequencia de clicks para pular com Date.now
const jump = () => {

    if ((lastJump + jumpDelay) < Date.now()) {

        mario.classList.add("jump");

        setTimeout(() => {

            mario.classList.remove("jump");
            lastJump = Date.now()

        } , 500);
    }
}


// Funcao que inicia o loop do jogo e para o mesmo
function playGame() {

    const loop = setInterval(() => {

    pipePosition = pipe.offsetLeft;
    marioPosition = +window.getComputedStyle(mario).bottom.replace("px","");

    pipe.style.animation = "pipe-move 1.25s linear infinite";

    if (pipePosition <= 333 && pipePosition > 175 && marioPosition < 80) {

        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./assets/images/amogus-gameover.png";
        mario.style.width = "100px";
        mario.style.marginLeft = "25px";
        mario.style.transform = "rotate(0deg)";

        gameOver = 1;

        clearInterval(loop);
    }

    console.log(`Pipe is at: ${pipePosition}`);
    console.log(`Mario is at: ${marioPosition}`);
    console.log(`Game over state: ${gameOver}`);
    return gameOver;

    }, 10)
}

// Funcao que reseta os parametros dos elementos do jogo
function startNewGame () {

    console.log(`Pipe is at: ${pipePosition}`);


    if (gameOver == 1) {
        
        pipe.style.left = "";

        mario.src = "./assets/images/amogus.gif"
        mario.style.width = "150px"
        mario.style.marginLeft = "";
        mario.style.bottom = "";
        mario.style.animation ="";
        mario.style.transform = "rotate(10deg)";
    
        gameOver = 0;

        console.log(`Pipe is at: ${pipePosition}`);
        console.log(`Game over state: ${gameOver}`);
        return gameOver;

    }
}

function buttonSquish1() {

    newGame.classList.add("buttonsquish");

    setTimeout(() => {

        newGame.classList.remove("buttonsquish");

    } , 100);
}

function buttonSquish2() {

    gameStart.classList.add("buttonsquish");

    setTimeout(() => {

        gameStart.classList.remove("buttonsquish");

    } , 100);
}

gameBoard.addEventListener("click", jump);
newGame.addEventListener("click", startNewGame);
gameStart.addEventListener("click", playGame);