var txt1 = document.getElementById("textinput");
var txt2 = document.getElementById("textoutput");
const button1 = document.getElementById("encoder");
const button2 = document.getElementById("decoder");
const button3 = document.getElementById("copy");
const button4 = document.getElementById("clear");
var messageOut1 = document.getElementById("outputmessage1");
var messageOut2 = document.getElementById("outputmessage2");

function getText () {

    messageOut1.classList.add("visibilityoff");
    messageOut2.classList.add("visibilityoff");

    txt3 = txt1.value
    var criptedText = txt3.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

    txt2.value = criptedText;
    console.log(txt2.value);
    console.log(messageOut1.innerText);
}


// limpar caixa de texto

function init() {
    txt1.value = "";
    txt2.value = "";
}

window.onload = init;

// limpar caixa de texto

function redoTxt() {

    messageOut1.classList.remove("visibilityoff");
    messageOut2.classList.remove("visibilityoff");
}

button1.addEventListener("click", getText);
button4.addEventListener("click",() => { init(); redoTxt()});