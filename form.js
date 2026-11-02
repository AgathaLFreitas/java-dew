const formulario = document.querySelector("#formularioAcademico");
console.log(formulario);

const campoNome = document.querySelector("#nome");
console.log(campoNome);

const campoNotaUm =  document.querySelector("#notaUm");
console.log(campoNotaUm);

const campoNotaDois = document.querySelector("#notaDois");
console.log(campoNotaDois);

const resultados = document.querySelector("#resultados");
console.log(resultados);

const botaoCalculoMedia = document.querySelector("#btnCalcular");
console.log(botaoCalculoMedia);

let mediaCalculada;
let aprovacao;
let mensagemFinal = "...";

function calculoMedia(valorNotaUm, valorNotaDois) {
    return (valorNotaUm + valorNotaDois) /2;
}

function verificarAprovacao(mediaCalculada) {
    if (mediaCalculada >= 6)
        return true; {
    
}
return false;
}

function mesagemAprovacao(aprovacao) {
    switch (aprovacao) {
        case true:
            return "Aprovado!";
        case false:
            return "Reprovado!";
    }
}

botaoCalculoMedia.addEventListener("click", function () {
    const valorNotaDois = Number(campoNotaDois.value);
    const valorNotaUm = Number(campoNotaUm.value);

    mediaCalculada = calculoMedia(valorNotaUm, valorNotaDois);
    aprovacao = verificarAprovacao(mediaCalculada);
    mensagemFinal = mesagemAprovacao(aprovacao);

   resultados.textContent = mensagemFinal + " Média: " +   mediaCalculada;

});
