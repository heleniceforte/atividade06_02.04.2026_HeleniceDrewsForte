let pontos = 0;

function respostaCerta(){
    pontos = pontos + 1;
    alert("Resposta correta!");
}

function respostaErrada(){
    alert("Resposta errada!");
}

function mostrarResultado(){
    document.getElementById("resultado").innerText =
    "Você fez " + pontos + " pontos no quiz!";
}