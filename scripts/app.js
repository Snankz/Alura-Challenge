var txt1 = document.getElementById("textinput");
var txt2 = document.getElementById("textoutput");
var txt3;

const meuNome = document.getElementById("meuNome");
const amogus1 = document.getElementById("amogus1")

const warningText = document.getElementById("warningMessage");

const button1 = document.getElementById("encoder");
const button2 = document.getElementById("decoder");
const button3 = document.getElementById("copy");
const button4 = document.getElementById("clearall");
const button5 = document.getElementById("paste");
const button6 = document.getElementById("clear");
var messageOut1 = document.getElementById("outputmessage1");
var messageOut2 = document.getElementById("outputmessage2");

console.log("Hello World!");


// Codifica o texto e se nao houver texto volta a mostrar as mensagens na saida de texto
function encodeText () {

    if (document.getElementById("textinput").value != 0) {

    messageOut1.classList.add("visibilityoff");
    messageOut2.classList.add("visibilityoff");

    var txt3 = txt1.value
    var criptedText = txt3.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    txt2.value = criptedText;

    } else if (document.getElementById("textinput").value == 0) {

        messageOut1.classList.remove("visibilityoff");
        messageOut2.classList.remove("visibilityoff");

        document.getElementById("textoutput").value = "";
    }
}

// Descodifica o texto e se nao houver texto volta a mostrar as mensagens na saida de texto
function decodeText () {

    clickEnc = false;
    clickCounterEnc();

    if (document.getElementById("textinput").value != 0) {

    messageOut1.classList.add("visibilityoff");
    messageOut2.classList.add("visibilityoff");

    var txt3 = txt1.value;
    var decriptedText = txt3.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    txt2.value = decriptedText;

    } else if (document.getElementById("textinput").value == 0) {

        messageOut1.classList.remove("visibilityoff");
        messageOut2.classList.remove("visibilityoff");

        document.getElementById("textoutput").value = "";
    }
}

function toLowerCase() {

    txt1.value = txt1.value.toLowerCase().replace(/ç/g, "c").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return txt1.value;
}

let clickEnc = true;

let intervalId1 = null;

function flipClick(value) {
    return !value;
}

// Pressiona e despressiona o botao de criptografar

function clickCounterEnc() {

    if (clickEnc == false ) {

    clearInterval(intervalId1);
    intervalId1 = null;

    button1.classList.remove("buttonpressed");
    button1.style.backgroundColor = "";
    button1.style.color = "whitesmoke"
    button1.innerText = "Criptografar";


    } else {

       intervalId1 = setInterval(function() {

        toLowerCase()
        encodeText();
        
        }, 10);

       button1.classList.add("buttonpressed");
       button1.style.backgroundColor = "rgb(30, 30, 30)";
       button1.style.color = "rgb(50, 200, 50)"
       button1.innerText = "Criptografar ligado!";
    }

    clickEnc = !clickEnc;
}

clickCounterEnc();

// limpar caixa de texto
function init() {

    txt1.value = "";
    txt2.value = "";
}

window.onload = init;

//Verifica se a caixa de texto input esta vazia

const loopCheck = setInterval(() => {

    if (txt1.value == 0) {

        txt2.value = "";

        messageOut1.classList.remove("visibilityoff");
        messageOut2.classList.remove("visibilityoff");
    } 

}, 100)

function redoTxt() {

    clickEnc = false;
    clickCounterEnc();

    messageOut1.classList.remove("visibilityoff");
    messageOut2.classList.remove("visibilityoff");

}

function copyText() {

  var copyText = document.getElementById("textoutput");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    button3.innerText = "Copiado!";
    button3.style.backgroundColor = "#c1c0c0";
    button3.style.color = "black"

    setTimeout(() => {

        button3.innerText = "Copiar";
        button3.style.backgroundColor ="rgb(10, 10, 10)";
        button3.style.color = "whitesmoke"
    } , 1000);

    if (clickEnc == false) {
        flipClick(clickEnc);
        clickCounterEnc();
    }
}


function pasteText() {
    navigator.clipboard.readText().then(text => txt1.value = text);
}

// Faz o botao fazer squish :D
function buttonSquish(target) {

    target.classList.add("buttonsquish");

    setTimeout(() => {

        target.classList.remove("buttonsquish");

    } , 80);
}

function warningBlink() {

    warningText.classList.add("textBlink");

    setTimeout(() => {

        warningText.classList.remove("textBlink");
    }, 500)
}

function showAmogus() {

    amogus1.classList.add("amogusBounceShow");
    amogus1.classList.remove("amogusBounce");
}

function hideAmogus() {
    amogus1.classList.remove("amogusBounceShow");
    amogus1.classList.add("amogusBounce");
}

button1.addEventListener("click", clickCounterEnc);
button2.addEventListener("click", decodeText);
button3.addEventListener("click", copyText);
button4.addEventListener("click",() => { init(); redoTxt()});
button5.addEventListener("click", pasteText);
button6.addEventListener("click", init);

txt1.addEventListener("mouseover", warningBlink);

meuNome.addEventListener("mouseover", showAmogus);
meuNome.addEventListener("mouseleave", hideAmogus)