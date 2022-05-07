const diasEL = document.getElementById("dias");
const horasEL = document.getElementById("horas");
const minutosEL = document.getElementById("minutos");
const segundosEL = document.getElementById("segundos");


const novoAno = "1 Jan 2023";

function timer(){
    const novoAnoData = new Date(novoAno);
    const dataAtual = new Date();

    const segundosTotais = (novoAnoData - dataAtual) / 1000;

    const dias = Math.floor(segundosTotais / 3600 / 24);
    const horas = Math.floor(segundosTotais / 3600) % 24;
    const minutos = Math.floor(segundosTotais / 60) % 60;
    const segundos = Math.floor(segundosTotais) % 60;

    diasEL.innerHTML = dias;
    horasEL.innerHTML = horas;
    minutosEL.innerHTML = minutos;
    segundosEL.innerHTML = segundos;
}

timer();

setInterval(timer, 1000);