var txt1 = document.getElementById("textinput");
var txt2 = document.getElementById("textoutput");
var txt3;
const button1 = document.getElementById("encoder");
const button2 = document.getElementById("decoder");
const button3 = document.getElementById("copy");
const button4 = document.getElementById("clearall");
const button5 = document.getElementById("paste");
const button6 = document.getElementById("clear");
var messageOut1 = document.getElementById("outputmessage1");
var messageOut2 = document.getElementById("outputmessage2");


// Codifica o texto e se nao houver texto volta a mostrar as mensagens na saida de texto
function encodeText () {

    if (document.getElementById("textinput").value != 0) {

    messageOut1.classList.add("visibilityoff");
    messageOut2.classList.add("visibilityoff");

    var txt3 = txt1.value
    var criptedText = txt3.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    txt2.value = criptedText;
    // console.log("O texto codificado e: ", criptedText);

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
    // console.log("O texto descodificado e: ", decriptedText);

    } else if (document.getElementById("textinput").value == 0) {

        messageOut1.classList.remove("visibilityoff");
        messageOut2.classList.remove("visibilityoff");

        document.getElementById("textoutput").value = "";
    }
}

let clickEnc = true;
// let clickDec = false;

let intervalId1 = null;
// let intervalId2 = null;

function flipClick(value) {
    return !value;
}

function clickCounterEnc() {

    if (clickEnc == false ) {

    clearInterval(intervalId1);
    intervalId1 = null;

    button1.classList.remove("buttonpressed");
    button1.style.backgroundColor = "";
    button1.style.color = "whitesmoke"
    button1.innerText = "Criptografar";


    } else {

       intervalId1 = setInterval(encodeText, 10);

       button1.classList.add("buttonpressed");
       button1.style.backgroundColor = "rgb(50, 150, 50)";
       button1.style.color = "black"
       button1.innerText = "Criptografando!";
    }

    clickEnc = !clickEnc;
    console.log(clickEnc);
}

clickCounterEnc();

// function clickCounterDec() {

//     if (clickDec == true || clickEnc == true) {

//     clearInterval(intervalId2);
//     intervalId2 = null;

//     button2.classList.remove("buttonpressed");
//     button2.style.backgroundColor = "rgb(10, 10, 10)";


//     } else {

//        intervalId2 = setInterval(decodeText, 10);

//        button2.classList.add("buttonpressed");
//        button2.style.backgroundColor = "rgb(0, 50, 0)";

//     }

//     clickDec = !clickDec;
//     console.log(clickDec);
// }


// limpar caixa de texto
function init() {

    txt1.value = "";
    txt2.value = "";
}
window.onload = init;

const loopCheck = setInterval(() => {

    if (txt1.value == 0) {

        txt2.value = "";

        messageOut1.classList.remove("visibilityoff");
        messageOut2.classList.remove("visibilityoff");
    } 

}, 100)

function redoTxt() {

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

button1.addEventListener("click", clickCounterEnc);
button2.addEventListener("click", decodeText);
button3.addEventListener("click", copyText);
button4.addEventListener("click",() => { init(); redoTxt()});
button5.addEventListener("click", pasteText);
button6.addEventListener("click", init);

// Faz o botao fazer squish :D
function buttonSquish(target) {

    target.classList.add("buttonsquish");

    setTimeout(() => {

        target.classList.remove("buttonsquish");

    } , 80);
}
