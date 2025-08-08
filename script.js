const botaoExtrair = document.querySelector("#botao-palavrachave");



botaoExtrair.addEventListener("click", apertarNoBotao);

function apertarNoBotao() {
    const texto = document.querySelector("#entrada-de-texto").value;

    const campoResultado = document.querySelector("#resultado-palavrachave");

    const palavras = texto.split(" ");

    campoResultado.textContent = palavras.join(", ");

}

