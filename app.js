var txt1 = document.getElementById("textinput");
var txt2 = document.getElementById("textoutput");
const button1 = document.getElementById("encoder");
const button2 = document.getElementById("decoder");
const button4 = document.getElementById("clear");
var messageOut1 = document.getElementById("outputmessage1");
var messageOut2 = document.getElementById("outputmessage2");

function getText () {

    if (txt1.value != 0){
    messageOut1 = messageOut1.innerText = "";
    messageOut2 = messageOut2.innerText = "";
    }

    txt3 = txt1.value
    var criptedText = txt3.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

    txt2.value = criptedText;
    console.log(txt2.value);
}


// limpar caixa de texto

function init() {
    txt1.value = "";
    txt2.value = "";
}

window.onload = init;

// limpar caixa de texto

function redotxt() {
    messageOut1 = messageOut1.innerText = "Cum";
    messageOut2 = messageOut2.innerText = "cum"
}

button1.addEventListener("click", getText);
button4.addEventListener("click",init, redotxt);