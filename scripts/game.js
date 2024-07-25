
const amogus = document.querySelector(".amogus");
const badAmogus = document.querySelector(".bad-amogus");
const gameBoard = document.querySelector("#game-board1");
const gameStart = document.querySelector("#start-game");
const newGame = document.querySelector("#new-game");

let gameOver = 0;

let badAmogusPosition;
let amogusPosition;

const jumpDelay = 10;
let lastJump = 0;


// Faz o Amogus pular
// Adiciona latencia a a frequencia de clicks para pular com Date.now
const jump = () => {

    if ((lastJump + jumpDelay) < Date.now()) {

        amogus.classList.add("jump");

        setTimeout(() => {

            amogus.classList.remove("jump");
            lastJump = Date.now()

        } , 500);
    }
}


// Funcao que inicia o loop do jogo e para o mesmo
function playGame() {

    const loop = setInterval(() => {

    badAmogusPosition = badAmogus.offsetLeft;
    amogusPosition = +window.getComputedStyle(amogus).bottom.replace("px","");

    badAmogus.style.animation = "bad-amogus-move 1.25s linear infinite";

    if (badAmogusPosition <= 333 && badAmogusPosition > 175 && amogusPosition < 80) {

        badAmogus.style.animation = "none";
        badAmogus.style.left = `${badAmogusPosition}px`;

        amogus.style.animation = "none";
        amogus.style.bottom = `${amogusPosition}px`;

        amogus.src = "./assets/images/amogus-gameover.png";
        amogus.style.width = "100px";
        amogus.style.marginLeft = "25px";
        amogus.style.transform = "rotate(0deg)";

        gameOver = 1;

        clearInterval(loop);
    }

    console.log(`badAmogus is at: ${badAmogusPosition}`);
    console.log(`amogus is at: ${amogusPosition}`);
    console.log(`Game over state: ${gameOver}`);
    return gameOver;

    }, 10)
}

// Funcao que reseta os parametros dos elementos do jogo
function startNewGame () {

    console.log(`badAmogus is at: ${badAmogusPosition}`);


    if (gameOver == 1) {
        
        badAmogus.style.left = "";

        amogus.src = "./assets/images/amogus.gif"
        amogus.style.width = "150px"
        amogus.style.marginLeft = "";
        amogus.style.bottom = "";
        amogus.style.animation ="";
        amogus.style.transform = "rotate(10deg)";
    
        gameOver = 0;

        console.log(`badAmogus is at: ${badAmogusPosition}`);
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