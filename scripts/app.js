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

    messageOut1.classList.add("visibilityoff");
    messageOut2.classList.add("visibilityoff");

    var txt3 = txt1.value
    var criptedText = txt3.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    txt2.value = criptedText;
    console.log("O texto codificado e: ", criptedText);
}

function decodeText () {

    messageOut1.classList.add("visibilityoff");
    messageOut2.classList.add("visibilityoff");

    var txt3 = txt1.value;
    var decriptedText = txt3.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    txt2.value = decriptedText;
    console.log("O texto descodificado e: ", decriptedText);
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

  alert("Copiado!");
}

function pasteText() {
    navigator.clipboard.readText().then(text => txt1.value = text);
}

button1.addEventListener("click", encodeText);
button2.addEventListener("click", decodeText);
button3.addEventListener("click", copyText);
button4.addEventListener("click",() => { init(); redoTxt()});
button5.addEventListener("click", pasteText);