var txt1 = document.getElementById("textinput");
var txt2 = document.getElementById("textoutput");
var txt3;
const button1 = document.getElementById("encoder");
const button2 = document.getElementById("decoder");
const button3 = document.getElementById("copy");
const button4 = document.getElementById("clear");
const button5 = document.getElementById("paste-button");
var messageOut1 = document.getElementById("outputmessage1");
var messageOut2 = document.getElementById("outputmessage2");

function encodeText () {

    if (document.getElementById("textinput").value != 0) {

    messageOut1.classList.add("visibilityoff");
    messageOut2.classList.add("visibilityoff");

    var txt3 = txt1.value
    var criptedText = txt3.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    txt2.value = criptedText;
    console.log("O texto codificado e: ", criptedText);

    } else if (document.getElementById("textinput").value == 0) {

        messageOut1.classList.remove("visibilityoff");
        messageOut2.classList.remove("visibilityoff");

        document.getElementById("textoutput").value = "";
    }
}

function decodeText () {

    if (document.getElementById("textinput").value != 0) {

    messageOut1.classList.add("visibilityoff");
    messageOut2.classList.add("visibilityoff");

    var txt3 = txt1.value;
    var decriptedText = txt3.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    txt2.value = decriptedText;
    console.log("O texto descodificado e: ", decriptedText);

    } else if (document.getElementById("textinput").value == 0) {

        messageOut1.classList.remove("visibilityoff");
        messageOut2.classList.remove("visibilityoff");

        document.getElementById("textoutput").value = "";
    }
}

// limpar caixa de texto
function init() {
    txt1.value = "";
    txt2.value = "";
}
window.onload = init;

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

    setTimeout(() => {

        button3.innerText = "Copiar";

    } , 1000);
}


function pasteText() {
    navigator.clipboard.readText().then(text => txt1.value = text);
}

button1.addEventListener("click", encodeText);
button2.addEventListener("click", decodeText);
button3.addEventListener("click", copyText);
button4.addEventListener("click",() => { init(); redoTxt()});
button5.addEventListener("click", pasteText);


function buttonSquish1() {

    button1.classList.add("buttonsquish");

    setTimeout(() => {

        button1.classList.remove("buttonsquish");

    } , 100);
}

function buttonSquish2() {

    button2.classList.add("buttonsquish");

    setTimeout(() => {

        button2.classList.remove("buttonsquish");

    } , 100);
}

function buttonSquish3() {

    button3.classList.add("buttonsquish");

    setTimeout(() => {

        button3.classList.remove("buttonsquish");

    } , 100);
}

function buttonSquish4() {

    button4.classList.add("buttonsquish");

    setTimeout(() => {

        button4.classList.remove("buttonsquish");

    } , 100);
}

function buttonSquish5() {

    button5.classList.add("buttonsquish");

    setTimeout(() => {

        button5.classList.remove("buttonsquish");

    } , 100);
}
