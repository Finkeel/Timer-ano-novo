const diasEL = document.getElementById("dias");
const horasEL = document.getElementById("horas");
const minutosEL = document.getElementById("minutos");
const segundosEL = document.getElementById("segundos");


const novoAno = "1 Jan 2024";

function timer(){
    const novoAnoData = new Date(novoAno);
    const dataAtual = new Date();

    const segundosTotais = (novoAnoData - dataAtual) / 1000;

    const dias = Math.floor(segundosTotais / 3600 / 24);
    const horas = Math.floor(segundosTotais / 3600) % 24;
    const minutos = Math.floor(segundosTotais / 60) % 60;
    const segundos = Math.floor(segundosTotais) % 60;

    diasEL.innerHTML = formatar(dias);
    horasEL.innerHTML = formatar(horas);
    minutosEL.innerHTML = formatar(minutos);
    segundosEL.innerHTML = formatar(segundos);
}

function formatar(tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
}

timer();

setInterval(timer, 1000);
