const contador = document.getElementById("contador");

function atualizarContador() {
    const dataAtual = new Date();
    const dataLancamento = new Date();
    dataLancamento.setHours(24, 0 , 0, 0);

    const diferenca = dataLancamento - dataAtual;
    if (diferenca <= 0) {
        contador.textContent = "As ofertas já terminaram!";
        return;
    }

    //codigo aprendido no trabalho
    const tempoRestante = new Date(diferenca);
    const horas = tempoRestante.getUTCHours().toString().padStart(2, '0'); 
    const minutos = tempoRestante.getUTCMinutes().toString().padStart(2, '0');
    const segundos = tempoRestante.getUTCSeconds().toString().padStart(2, '0');

    contador.innerHTML = `${horas}:${minutos}:${segundos}<br> Até o fim das ofertas!`;
}
atualizarContador();
setInterval(atualizarContador, 1000);